/**
 *
 */
(function($) {

    $(document).ready(function(){

        // Pluralize intervals (days, weeks, etc.) based on frequency
        $('.sked-form select[name="frequency"]').change(function(){
            var bPlural = $(this).val() > 1;
            var fnPluralString = function(){
                var strText = $(this).text();
                if (bPlural && !strText.match('s$'))
                    $(this).text(strText + 's');
                else if (!bPlural && strText.match('s$'))
                    $(this).text(strText.slice(0, -1));
            };
            $('.sked-form select[name="interval"] option').each(fnPluralString);
        }).change();

        // Only show weekdays for weekly & monthly intervals
        $('.sked-form select[name="interval"]').change(function(){
            var bHide = ($(this).val() === '1');
            $('[name="weekdays[]"]').prop('disabled', bHide)
                .parent(':not(form)')[bHide ? 'hide' : 'show']();
        }).change();

    });

})(jQuery);
