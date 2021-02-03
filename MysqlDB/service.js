const pool = require("./config");

module.exports = {
    createSkin: (data, callback) => {
        pool.query(
            `insert into skin (id , cond , description , isCreated) values (?,?,?,?)`,
            [
                data.id,
                data.condition,
                data.description,
                data.isCreated
            ],
            (err, result, fields) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, result);
            }
        )
    }
    ,
    addSkin: (data, callback) => {
        pool.query(
            `insert into skin (id , cond , description , isCreated) values (?,?,?,0)`,
            [
                data.id,
                data.condition,
                data.description
            ],
            (err, result, fields) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, result);
            }
        )
    }
    ,
    modifySkin: (data, callback) => {
        pool.query(
            'update skin set cond = ?, description = ? where id = ?',
            [
                data.condition,
                data.description,
                data.id
            ],
            (err, result, fields) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, result);
            }
        )
    }
    ,
    deleteSkin: (data, callback) => {
        pool.query(
            'delete from skin where id = ?',
            [
                data.id
            ],
            (err, result, fields) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, result);
            }
        )
    }
    ,
    viewAllSkin: (data, callback) => {
        pool.query(
            'select * from skin ',
            [],
            (err, result, fields) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, result);
            }
        )
    }
    ,
    viewAllCreatedSkin: (data, callback) => {
        pool.query(
            'select * from skin where isCreated = ?',
            [
                data.isCreated
            ],
            (err, result, fields) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, result);
            }
        )
    }
    ,
    login: (data, callback) => {
        pool.query(
            'select * from user where email = ?',
            [
                data.email
            ],
            (err, result, fields) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, result);
            }
        )
    }
}