'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dependente extends Model {
    static associate(models) {
        this.belongsTo(models.Pessoa, {
          foreignKey: 'idPessoas',
          id: 'id',
          as: 'titular'
        })
    }
  };
  Dependente.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nome: DataTypes.STRING,
    idPessoas: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pessoas'
      },
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Dependente',
  });
  return Dependente;
};