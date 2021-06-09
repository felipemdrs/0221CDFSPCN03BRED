'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Disciplina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Disciplina.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'Disciplina',
    timestamps: false
  });
  return Disciplina;
};