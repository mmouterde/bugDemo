import { Validator } from 'express-json-validator-middleware';

const UserParamSchemaForUpdate = {
    type: 'object',
    properties: {
        firstName: { type: 'string' }
    },
};

const validator = new Validator({
    allErrors: true,
    format: 'full',
    jsonPointers: true,
});

validator.validate({
    body: UserParamSchemaForUpdate,
});


export default router;
