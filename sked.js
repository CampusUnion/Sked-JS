/**
 * JS supplement to the Sked PHP calendar library.
 *
 * @see https://github.com/CampusUnion/Sked
 */
(function($) {

    $(document).ready(function(){

        // Pluralize intervals (days, weeks, etc.) based on frequency
        $('.sked-form select[name="frequency"], .sked-form select[name="lead_time_num"]').change(function(){
            var bPlural = $(this).val() !== '1';
            var fnPluralString = function(){
                var strText = $(this).text();
                if (bPlural && strText !== '-' && !strText.match('s$'))
                    $(this).text(strText + 's');
                else if (!bPlural && strText.match('s$'))
                    $(this).text(strText.slice(0, -1));
            };
            $(this).siblings('select').children('option').each(fnPluralString);
        }).change();

        // Only show weekdays for weekly & monthly intervals
        $('.sked-form select[name="interval"]').change(function(){
            var bHide = ($(this).val() === '1' || $(this).val() === '');
            $('[name="weekdays[]"]').prop('disabled', bHide)
                .parents('.sked-input-wrapper')[bHide ? 'hide' : 'show']();
        }).change();

    });

})(jQuery);

// Tell dependency loaders we're here.
window.skedJsLoaded = true;
