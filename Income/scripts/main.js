$(document).ready(function () {
    // INCOME EXPAND / COLLAPS
    var frs = 14;
    var status_l;
    var status_u;


    // Collapsed on first load >>
    $('.income-grid_container').css('grid-template-columns', 'repeat(' + frs + ', 1fr)');

    //Local title 1
    $('.int-grid_line-1t_local').css('grid-column', '10');
    $('.int-grid_line-1t_local>label').css('font-size', '1em');
    $('.int-grid_line-1t_usd').css('grid-column', '11 / span 4');

    //Local Title 2
    $('.int-grid_line-2t-local_uc').css('display', 'none');
    $('.int-grid_line-2t-local_r').css('display', 'none');
    $('.int-grid_line-2t-local_ue').css('display', 'none');

    // local cols data
    for (i = 1; i <= 66; i++) {
        $('.int-grid_line-' + i + 'd-local_uc').css('display', 'none');
        $('.int-grid_line-' + i + 'd-local_r').css('display', 'none');
        $('.int-grid_line-' + i + 'd-local_ue').css('display', 'none');
    }
    $('.int-grid_line-1t_local>img').attr('src', 'https://beckolsystem.com/WHR/images/expand.svg');
    $('.int-grid_line-1t_local>img').addClass('collapsed');


    //USD COLLAPSE
    $('.int-grid_line-1t_usd').css('grid-column', '11');
    $('.int-grid_line-1t_usd>label').css('font-size', '1em');
    $('.int-grid_line-1t_notes').css('grid-column', '12 / span 3');

    //Local Title 2
    $('.int-grid_line-2t-usd_uc').css('display', 'none');
    $('.int-grid_line-2t-usd_r').css('display', 'none');
    $('.int-grid_line-2t-usd_ue').css('display', 'none');

    // local cols data
    for (i = 1; i <= 66; i++) {
        $('.int-grid_line-' + i + 'd-usd_uc').css('display', 'none');
        $('.int-grid_line-' + i + 'd-usd_r').css('display', 'none');
        $('.int-grid_line-' + i + 'd-usd_ue').css('display', 'none');
        $('.int-grid_line-' + i + 'd_notes').css('grid-column', '12 / span 3');
    }


    $('.int-grid_line-1t_usd>img').attr('src', 'https://beckolsystem.com/WHR/images/expand.svg');
    $('.int-grid_line-1t_usd>img').addClass('collapsed');

    // << Collapsed on first load



    // BTN LOCAL
    $('.int-grid_line-1t_local>img').click(function () {

        if ($(this).hasClass("collapsed")) {
            $(this).removeClass('collapsed');
            $(this).addClass('expanded');
            if (frs == 14) {
                frs = frs + 3;
                //Local title 1
                $('.income-grid_container').css('grid-template-columns', 'repeat(' + frs + ', 1fr)');
                $('.int-grid_line-1t_local').css('grid-column', '10 / span 4');
                $('.int-grid_line-1t_local>label').css('font-size', '1em');
                $('.int-grid_line-1t_usd').css('grid-column', '14');
                $('.int-grid_line-1t_notes').css('grid-column', '15 / span 3');

                //Local Title 2
                $('.int-grid_line-2t-local_uc').show();
                $('.int-grid_line-2t-local_r').show();
                $('.int-grid_line-2t-local_ue').show();

                // local cols data
                for (i = 1; i <= 66; i++) {
                    $('.int-grid_line-' + i + 'd-local_uc').show();
                    $('.int-grid_line-' + i + 'd-local_r').show();
                    $('.int-grid_line-' + i + 'd-local_ue').show();
                    $('.int-grid_line-' + i + 'd_notes').css('grid-column', '15 / span 3');
                }


                $(this).attr('src', 'https://beckolsystem.com/WHR/images/collaps.svg');
                return false;
            } else {
                frs = frs + 3;
                //Local title 1
                $('.income-grid_container').css('grid-template-columns', 'repeat(20, 1fr)');
                $('.int-grid_line-1t_local').css('grid-column', '10 / span 4');
                $('.int-grid_line-1t_local>label').css('font-size', '1em');

                //Local Title 2
                $('.int-grid_line-2t-local_uc').show();
                $('.int-grid_line-2t-local_r').show();
                $('.int-grid_line-2t-local_ue').show();

                // local cols data
                for (i = 1; i <= 66; i++) {
                    $('.int-grid_line-' + i + 'd-local_uc').show();
                    $('.int-grid_line-' + i + 'd-local_r').show();
                    $('.int-grid_line-' + i + 'd-local_ue').show();
                }


                $(this).attr('src', 'https://beckolsystem.com/WHR/images/collaps.svg');

                //Local title 1
                $('.int-grid_line-1t_usd').css('grid-column', '14 / span 4');
                $('.int-grid_line-1t_usd>label').css('font-size', '1em');
                $('.int-grid_line-1t_notes').css('grid-column', '18 / span 3');

                //Local Title 2
                $('.int-grid_line-2t-usd_uc').show();
                $('.int-grid_line-2t-usd_r').show();
                $('.int-grid_line-2t-usd_ue').show();

                // local cols data
                for (i = 1; i <= 66; i++) {
                    $('.int-grid_line-' + i + 'd-usd_uc').show();
                    $('.int-grid_line-' + i + 'd-usd_r').show();
                    $('.int-grid_line-' + i + 'd-usd_ue').show();
                    $('.int-grid_line-' + i + 'd_notes').css('grid-column', '18 / span 3');
                }

                return false;
            }
        }

        if ($(this).hasClass("expanded")) {
            $(this).removeClass('expanded');
            $(this).addClass('collapsed');

            if (frs == 17) {
                frs = frs - 3;
                //Local title 1
                $('.income-grid_container').css('grid-template-columns', 'repeat(' + frs + ', 1fr)');
                $('.int-grid_line-1t_local').css('grid-column', '10');
                $('.int-grid_line-1t_local>label').css('font-size', '1em');
                $('.int-grid_line-1t_usd').css('grid-column', '11');
                $('.int-grid_line-1t_notes').css('grid-column', '12 / span 3');

                //Local Title 2
                $('.int-grid_line-2t-local_uc').css('display', 'none');
                $('.int-grid_line-2t-local_r').css('display', 'none');
                $('.int-grid_line-2t-local_ue').css('display', 'none');

                // local cols data
                for (i = 1; i <= 66; i++) {
                    $('.int-grid_line-' + i + 'd-local_uc').css('display', 'none');
                    $('.int-grid_line-' + i + 'd-local_r').css('display', 'none');
                    $('.int-grid_line-' + i + 'd-local_ue').css('display', 'none');
                    $('.int-grid_line-' + i + 'd_notes').css('grid-column', '12 / span 3');
                }


                $(this).attr('src', 'https://beckolsystem.com/WHR/images/expand.svg');
                return false;
            } else {
                frs = frs - 3;
                //Local title 1
                $('.income-grid_container').css('grid-template-columns', 'repeat(' + frs + ', 1fr)');
                $('.int-grid_line-1t_local').css('grid-column', '10');
                $('.int-grid_line-1t_usd').css('grid-column', '11 / span 4');
                $('.int-grid_line-1t_usd>label').css('font-size', '1em');
                $('.int-grid_line-1t_notes').css('grid-column', '15 / span 3');

                //Local Title 2
                $('.int-grid_line-2t-local_uc').css('display', 'none');
                $('.int-grid_line-2t-local_r').css('display', 'none');
                $('.int-grid_line-2t-local_ue').css('display', 'none');

                // local cols data
                for (i = 1; i <= 66; i++) {
                    $('.int-grid_line-' + i + 'd-local_uc').css('display', 'none');
                    $('.int-grid_line-' + i + 'd-local_r').css('display', 'none');
                    $('.int-grid_line-' + i + 'd-local_ue').css('display', 'none');
                }


                //Local Title 2
                $('.int-grid_line-2t-usd_uc').show();
                $('.int-grid_line-2t-usd_r').show();
                $('.int-grid_line-2t-usd_ue').show();

                // local cols data
                for (i = 1; i <= 66; i++) {
                    $('.int-grid_line-' + i + 'd-usd_uc').show();
                    $('.int-grid_line-' + i + 'd-usd_r').show();
                    $('.int-grid_line-' + i + 'd-usd_ue').show();
                    $('.int-grid_line-' + i + 'd_notes').css('grid-column', '15 / span 3');
                }


                $(this).attr('src', 'https://beckolsystem.com/WHR/images/expand.svg');
                return false;
            };
        }
    });



    // BTN USD
    $('.int-grid_line-1t_usd>img').click(function () {

        if ($(this).hasClass('collapsed')) {
            $(this).removeClass('collapsed');
            $(this).addClass('expanded');

            if (frs == 14) {
                frs = frs + 3;
                //Local title 1
                $('.income-grid_container').css('grid-template-columns', 'repeat(' + frs + ', 1fr)');
                $('.int-grid_line-1t_usd').css('grid-column', '11 / span 4');
                $('.int-grid_line-1t_usd>label').css('font-size', '1em');
                $('.int-grid_line-1t_notes').css('grid-column', '15 / span 3');

                //Local Title 2
                $('.int-grid_line-2t-usd_uc').show();
                $('.int-grid_line-2t-usd_r').show();
                $('.int-grid_line-2t-usd_ue').show();

                // local cols data
                for (i = 1; i <= 66; i++) {
                    $('.int-grid_line-' + i + 'd-usd_uc').show();
                    $('.int-grid_line-' + i + 'd-usd_r').show();
                    $('.int-grid_line-' + i + 'd-usd_ue').show();
                    $('.int-grid_line-' + i + 'd_notes').css('grid-column', '15 / span 3');
                }


                $(this).attr('src', 'https://beckolsystem.com/WHR/images/collaps.svg');
                return false;
            } else {
                frs = frs + 3;
                //Local title 1
                $('.income-grid_container').css('grid-template-columns', 'repeat(20, 1fr)');
                $('.int-grid_line-1t_local').css('grid-column', '10 / span 4');
                $('.int-grid_line-1t_local>label').css('font-size', '1em');

                //Local Title 2
                $('.int-grid_line-2t-local_uc').show();
                $('.int-grid_line-2t-local_r').show();
                $('.int-grid_line-2t-local_ue').show();

                // local cols data
                for (i = 1; i <= 66; i++) {
                    $('.int-grid_line-' + i + 'd-local_uc').show();
                    $('.int-grid_line-' + i + 'd-local_r').show();
                    $('.int-grid_line-' + i + 'd-local_ue').show();
                }


                $(this).attr('src', 'https://beckolsystem.com/WHR/images/collaps.svg');

                //Local title 1
                $('.int-grid_line-1t_usd').css('grid-column', '14 / span 4');
                $('.int-grid_line-1t_usd>label').css('font-size', '1em');
                $('.int-grid_line-1t_notes').css('grid-column', '18 / span 3');

                //Local Title 2
                $('.int-grid_line-2t-usd_uc').show();
                $('.int-grid_line-2t-usd_r').show();
                $('.int-grid_line-2t-usd_ue').show();

                // local cols data
                for (i = 1; i <= 66; i++) {
                    $('.int-grid_line-' + i + 'd-usd_uc').show();
                    $('.int-grid_line-' + i + 'd-usd_r').show();
                    $('.int-grid_line-' + i + 'd-usd_ue').show();
                    $('.int-grid_line-' + i + 'd_notes').css('grid-column', '18 / span 3');
                }

                return false;
            }
        }

        if ($(this).hasClass("expanded")) {
            $(this).removeClass('expanded');
            $(this).addClass('collapsed');

            if (frs == 17) {
                frs = frs - 3;
                //Local title 1
                $('.income-grid_container').css('grid-template-columns', 'repeat(' + frs + ', 1fr)');
                $('.int-grid_line-1t_usd').css('grid-column', '11');
                $('.int-grid_line-1t_usd>label').css('font-size', '1em');
                $('.int-grid_line-1t_notes').css('grid-column', '12 / span 3');

                //Local Title 2
                $('.int-grid_line-2t-usd_uc').css('display', 'none');
                $('.int-grid_line-2t-usd_r').css('display', 'none');
                $('.int-grid_line-2t-usd_ue').css('display', 'none');

                // local cols data
                for (i = 1; i <= 66; i++) {
                    $('.int-grid_line-' + i + 'd-usd_uc').css('display', 'none');
                    $('.int-grid_line-' + i + 'd-usd_r').css('display', 'none');
                    $('.int-grid_line-' + i + 'd-usd_ue').css('display', 'none');
                    $('.int-grid_line-' + i + 'd_notes').css('grid-column', '12 / span 3');
                }
                

                $(this).attr('src', 'https://beckolsystem.com/WHR/images/expand.svg');
                return false;
            } else {
                frs = frs - 3;
                //Local title 1
                $('.income-grid_container').css('grid-template-columns', 'repeat(' + frs + ', 1fr)');
                $('.int-grid_line-1t_local').css('grid-column', '10 / span 4');
                $('.int-grid_line-1t_usd').css('grid-column', '14');
                $('.int-grid_line-1t_usd>label').css('font-size', '1em');
                $('.int-grid_line-1t_notes').css('grid-column', '15 / span 3');

                //Local Title 2
                $('.int-grid_line-2t-usd_uc').css('display', 'none');
                $('.int-grid_line-2t-usd_r').css('display', 'none');
                $('.int-grid_line-2t-usd_ue').css('display', 'none');

                // local cols data
                for (i = 1; i <= 66; i++) {
                    $('.int-grid_line-' + i + 'd-usd_uc').css('display', 'none');
                    $('.int-grid_line-' + i + 'd-usd_r').css('display', 'none');
                    $('.int-grid_line-' + i + 'd-usd_ue').css('display', 'none');
                    $('.int-grid_line-' + i + 'd_notes').css('grid-column', '15 / span 3');
                }
                

                $(this).attr('src', 'https://beckolsystem.com/WHR/images/expand.svg');
                return false;
            };
        }
    });
});