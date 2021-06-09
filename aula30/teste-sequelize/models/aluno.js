'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Aluno.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    nome: DataTypes.STRING(150),
    idade: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'Aluno',
    timestamps: false // Quando não temos o createdAt e o updateAt
  });
  return Aluno;
};