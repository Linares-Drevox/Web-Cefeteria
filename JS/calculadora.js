$(document).ready(function() {
    var result = $('#result');
  
    function calculate(value) {
      if (value === '=') {
        try {
          result.val(eval(result.val()));
        } catch (error) {
          result.val('Error');
        }
      } else if (value === 'C') {
        result.val('');
      } else {
        result.val(result.val() + value);
      }
    }
  
    $('.btn').click(function() {
      var value = $(this).text();
      calculate(value);
    });
  
    function clearResult() {
      result.val('');
    }
  });
  