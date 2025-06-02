-- PLV8 JavaScript functions test
CREATE OR REPLACE FUNCTION plv8_test() RETURNS text AS $$
    return "Hello from PLV8!";
$$ LANGUAGE plv8 IMMUTABLE STRICT;

CREATE OR REPLACE FUNCTION json_manipulate(input_json JSON)
RETURNS JSON AS $$
    var obj = JSON.parse(input_json);
    obj.processed = true;
    obj.timestamp = new Date().toISOString();
    return JSON.stringify(obj);
$$ LANGUAGE plv8;

CREATE OR REPLACE FUNCTION calculate_distance(lat1 FLOAT, lon1 FLOAT, lat2 FLOAT, lon2 FLOAT)
RETURNS FLOAT AS $$
    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    
    var R = 6371; // Earth's radius in kilometers
    var dLat = toRadians(lat2 - lat1);
    var dLon = toRadians(lon2 - lon1);
    
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
    
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var distance = R * c;
    
    return distance;
$$ LANGUAGE plv8 IMMUTABLE STRICT;

-- PLV8 with database access
CREATE OR REPLACE FUNCTION get_user_stats()
RETURNS JSON AS $$
    var result = plv8.execute('SELECT status, COUNT(*) as count FROM users GROUP BY status');
    var stats = {};
    
    for (var i = 0; i < result.length; i++) {
        stats[result[i].status] = result[i].count;
    }
    
    return JSON.stringify({
        total_users: result.reduce(function(sum, row) { return sum + row.count; }, 0),
        by_status: stats,
        generated_at: new Date().toISOString()
    });
$$ LANGUAGE plv8;

-- PLV8 trigger function
CREATE OR REPLACE FUNCTION audit_trigger()
RETURNS TRIGGER AS $$
    var audit_data = {
        table_name: TG_TABLE_NAME,
        operation: TG_OP,
        timestamp: new Date().toISOString(),
        old_data: OLD,
        new_data: NEW
    };
    
    plv8.execute(
        'INSERT INTO audit_log (data) VALUES ($1)',
        [JSON.stringify(audit_data)]
    );
    
    return null;
$$ LANGUAGE plv8; 