import mysql from "mysql2/promise";
import dbConfig from "./config/db.config";

const pool = mysql.createPool({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

export const User = {
    getByUserId : id => {
        const filteredUser = users.filter(person => user.id === id);
        return filteredUser[0];
    },
    getAllUsers : async (columns) => {
        const [users] = await pool.query(
            `
            SELECT 
                ${columns.toString()}
            FROM user;
            `
        );
        return users;
    }
};

export const Company = {
    getByCompanyId : id => {
        const filteredUser = users.filter(person => user.id === id);
        return filteredUser[0];
    },
    getAllCompany : async (columns) => {
        const [companies] = await pool.query(
            `
            SELECT 
                ${columns.toString()}
            FROM company;
            `
        );
        return companies;
    }
};