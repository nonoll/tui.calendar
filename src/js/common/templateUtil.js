/**
 * @fileoverview common/templates utilities.
 */
'use strict';

var _templateId = 0;
var _templates = {};

module.exports = {
    getTemplateIdGenerator: function() {
        _templateId += 1;

        return _templateId;
    },
    getTemplateIdByContainer: function(container) {
        return container.dataset.templateId || container.closest('[data-template-id]').dataset.templateId;
    },
    addCustomTemplates: function(templateId, customTemplates) {
        _templates[templateId] = customTemplates;
    },
    getCustomTemplates: function(templateId, name) {
        if (_templates[templateId]) {
            return _templates[templateId][name];
        }

        return null;
    },
    removeCustomTemplates: function(templateId) {
        if (_templates[templateId]) {
            delete _templates[templateId];

            return true;
        }

        return false;
    }
};
