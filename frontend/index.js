$(document).ready(function(){

    $('.domain-category').click(function(){
        $(this).toggleClass('domain-category-clicked');
    });

    $('.home-page-holder').click(function(){
        $('.home-page').fadeOut(300);
        setTimeout(function() {
            $('.domains').fadeIn(600);
        },300);
    })

    var technical = 0;
    var management = 0;
    var designing = 0;
    var machinelearning = 0;
    var frontend = 0;
    var backend = 0;
    var android = 0;
    var python = 0;
    var general = 0;
    var uiux = 0;
    var graphic = 0;
    var video = 0;
    var manager = 0;
    var content = 0;
    var x = 0;
    var y = 0;
    var z = 0;

    $('#technical').click(function(){
        technical = !technical;
        x=!x;
    })

    $('#designing').click(function(){
        designing = !designing;
        y=!y;
    });

    $('#management').click(function(){
        management = !management;
        z=!z;
    });

    $('#machinelearning').click(function(){
        machinelearning = !machinelearning;
    });

    $('#frontend').click(function(){
        frontend = !frontend;
    });

    $('#backend').click(function(){
        backend = !backend;
    });

    $('#python').click(function(){
        python = !python;
    });

    $('#android').click(function(){
        android = !android;
    });

    $('#general').click(function(){
        general = !general;
    });

    $('#uiux').click(function(){
        uiux = !uiux;
    });

    $('#graphic').click(function(){
        graphic = !graphic;
    });

    $('#video').click(function(){
        video = !video;
    });

    $('#manager').click(function(){
        manager = !manager;
    });

    $('#content').click(function(){
        content = !content;
    });

    $('#subdomains-start').click(function(){

        $('.domains').fadeOut(300);

        if(x==1){
            setTimeout(function(){
                $('.technical-sub').fadeIn(600);
            },300);
            x=0;
        }

        else if(y==1){
            setTimeout(function(){
                $('.designing-sub').fadeIn(600);
            },300);
            y=0;
        }

        else if(z==1){
            setTimeout(function(){
                $('.management-sub').fadeIn(600);
            },300);
            z=0;
        }

        else {
            setTimeout(function(){
                $('.domains').fadeIn(600);
            },300)
        }

    });

    $('#secondary-submit-form-technical').click(function(){

        $('.technical-sub').fadeOut(300);

        if(y==1){
            setTimeout(function(){
                $('.designing-sub').fadeIn(600);
            },300);
            y=0;
        }

        else if(z==1){
            setTimeout(function(){
                $('.management-sub').fadeIn(600);
            },300);
            z=0;
        }

        else {
            setTimeout(function(){
                $('.form').fadeIn(600);
            },300)
        }

    });

    $('#secondary-submit-form-designing').click(function(){

        $('.designing-sub').fadeOut(300);

        if(x==1){
            setTimeout(function(){
                $('.technical-sub').fadeIn(600);
            },300);
            x=0;
        }

        else if(z==1){
            setTimeout(function(){
                $('.management-sub').fadeIn(600);
            },300);
            z=0;
        }

        else {
            setTimeout(function(){
                $('.form').fadeIn(600);
            },300)
        }

    });

    $('#secondary-submit-form-management').click(function(){

        $('.management-sub').fadeOut(300);

        if(x==1){
            setTimeout(function(){
                $('.technical-sub').fadeIn(600);
            },300);
            x=0;
        }

        else if(y==1){
            setTimeout(function(){
                $('.designing-sub').fadeIn(600);
            },300);
            y=0;
        }

        else {
            setTimeout(function(){
                $('.form').fadeIn(600);
            },300)
        }

    });


    $('#final-submit').click(function() {
       
        var fname = document.getElementById("fname").value;
        var regno = document.getElementById("regno").value;
        var emailaddress = document.getElementById("emailaddress").value;
        var phno = document.getElementById("phno").value;
        var submission = {
            firstName : fname,
            registrationNumber  : regno,
            phoneNumber       : phno,
            emailAddress  : emailaddress,
            technical : technical,
            designing : designing,
            management : management,
            design:{
                uiux : uiux,
                graphic : graphic,
                video : video
            },
            management:{
                writer : content,
                manager : manager
            },
            technical:{
                machinelearning : machinelearning,
                frontend : frontend,
                backend : backend,
                python : python,
                android: android,
                general : general
            }
        };
        JSON.stringify(submission);
        $.post("/record",submission,(data,status)=>{
            console.log(JSON.stringify(data) )
        })
        $('.form').fadeOut(300);
        setTimeout(function(){
            $('.thank-you').fadeIn(600);
        },300)
    });
});
