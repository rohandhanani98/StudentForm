"use strict";
let httpContext = require("express-http-context");

module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define(
        "Students",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
              },
              name: {
                type: DataTypes.STRING
              },
              email: {
                type: DataTypes.STRING
              },
              mobile: {
                type: DataTypes.STRING
              },
              password: {
                type: DataTypes.STRING
              },
              age: {
                type: DataTypes.STRING
              },
              gender: DataTypes.ENUM("Male", "Female"),
              dateOfBirth: DataTypes.DATE,
              authToken: DataTypes.TEXT,
              qualification:DataTypes.ENUM("10th pass", "12th pass", "Graduate", "Postgraduate"),
              createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
              },
              updatedAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
              },
        },

    );
    Students.beforeSave((data, options)=>{
        
    })

    return Students;
};
