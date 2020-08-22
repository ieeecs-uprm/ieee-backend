'use strict';

module.exports = {
    method: 'get',
    path: '/about',
    options: {
        handler: async (request, h) => {
            return {about:'The IEEE is a student organization.'};
        }
    }
};
