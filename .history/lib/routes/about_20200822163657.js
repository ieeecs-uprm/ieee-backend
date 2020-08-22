'use strict';

module.exports = {
    method: 'get',
    path: '/about',
    options: {
        handler: async (request, h) => {
            return 'The IEEE is a student organization.'
        }
    }
};
