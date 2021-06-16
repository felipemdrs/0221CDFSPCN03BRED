'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      this.hasMany(models.Dependente, {
        foreignKey: 'idPessoas',
        targetKey: 'id',
        as: 'dependentes'
      })
    }
  };
  Pessoa.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
  });
  return Pessoa;
};