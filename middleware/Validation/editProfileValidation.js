const { check, body } = require('express-validator');
const path = require('path');

const validacionesEditProfile = [
    check('name')
    .notEmpty().withMessage('El nombre es obligatorio').bail()
    .isAlphanumeric('es-ES',{ignore:" "}).withMessage('Los caracteres especiales no están permitidos').bail()
    .isLength({ min: 3, max: 26 }).withMessage('El nombre debe tener entre 3 y 26 caracteres'),

    check('user')
        .notEmpty().withMessage('El nombre de usuario es obligatorio').bail()
        .isLength({ min: 3, max: 16 }).withMessage('El nombre debe tener entre 3 y 16 caracteres'),

    check('phone')
        .optional({nullable:true, checkFalsy: true})
        .isNumeric().withMessage('debes colocar un número de teléfono').bail()
        .isLength({ min: 6, max: 14 }).withMessage('El telefono de debe tener entre 6 y 14 números'),

    check('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Debes colocar un email valido').bail()
        .normalizeEmail().bail(),

    check('province')
        .optional({nullable:true, checkFalsy: true})
        .isAlpha('es-ES',{ignore:" "}).withMessage('Los caracteres especiales y números no están permitidos'),
    
    check('city')
        .optional({nullable:true, checkFalsy: true})
        .isAlpha('es-ES',{ignore:" "}).withMessage('Los caracteres especiales y números no están permitidos'),

    check('street')
        .optional({nullable:true, checkFalsy: true}).bail()
        .isAlphanumeric('es-ES',{ignore:" "}).withMessage('Los caracteres especiales no están permitidos'),

    check('num')
        .optional({nullable:true, checkFalsy: true}).bail()
        .isNumeric().withMessage('debes colocar el número de tu localidad'),

    body('imageProfile')
    .custom((value, { req }) => {
        const file = req.file;
        if(!file){
            if(value === undefined){
                return true
            }
        } else {
        const acceptExtensions = ['.jpg', '.png', '.jpeg'];
        const fileExtension = path.extname(file.originalname);
        if (!acceptExtensions.includes(fileExtension)) {
            throw new Error(`Las extensiones de imagen permitidas son: ${acceptExtensions.join(", ")}`);
        }
        return true;
    }
    })
];

module.exports = validacionesEditProfile;