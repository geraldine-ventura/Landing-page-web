$(document).ready(function() {
    // Inicializa el plugin de wizard
    $('#wizard-form').bootstrapWizard({
      'tabClass': 'nav nav-tabs',
      'nextSelector': '.next-step',
      'previousSelector': '.prev-step',
      onTabClick: function(tab, navigation, index) {
        return false;
      }
    });
  });
  