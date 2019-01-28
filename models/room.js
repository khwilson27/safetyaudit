module.exports = function (sequelize, DataTypes) {
  var Room = sequelize.define("Room", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    c1: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c1_ns: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c1_b: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c1_nm: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c1_po: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    
    c2: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c2_m: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c2_nor: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c2_b: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    c3: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c3_nl: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c3_ns: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c3_ic: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    c4: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c4_m: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c4_b: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c4_o: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    c5: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c5_50: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c5_20: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    c6: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c6_ct: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c6_l: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c6_fc: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    
    c7: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    
    c8: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    
    c9: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c9_u: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c9_d: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c9_hec: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c9_dc: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c9_ecup: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
   
    c10: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c10_u: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    
    c11: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c11_piaf: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c11_c: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c11_sh: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    c12: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    
    c13: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c13_s: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c13_c: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c13_t: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c13_d: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    c13_v: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  Room.associate = function (models) {
    Room.belongsTo(models.Audit, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  }
  
  return Room;
};
