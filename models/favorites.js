module.exports = (sequelize, DataTypes) => {
    const Fav = sequelize.define(
        "fav",
        {
            city: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            square_feet: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            bedrooms: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            bathrooms: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        },
        {
            underscored: true,
            freezeTableName: true
        }
    );
    Fav.associate = (models) => {
        Fav.belongsTo(models.user, {
          foreignKey: {
            allowNull: false
          }
        });
      };
      
    return Fav;

    };