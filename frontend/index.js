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

    var technical = false;
    var management = false;
    var designing = false;
    var machinelearning = false;
    var frontend = false;
    var backend = false;
    var android = false;
    var python = false;
    var general = false;
    var uiux = false;
    var graphic = false;
    var video = false;
    var manager = false;
    var content = false;
    var x = false;
    var y = false;
    var z = false;

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

        switch (checkForm(fname, regno, emailaddress, phno) ){
            case 1: alert("Invalid registration number entered"); return;
            case 2: alert("Invalid email entered"); return;
            case 3: alert("Invalid name entered"); return;
            case 4: alert("Invalid phone number entered"); return;
            case 5: alert("all fields must be filled"); return;
            default: break;
        }

        var submission = {
            firstName : fname,
            registrationNumber  : regno,
            phoneNumber       : phno,
            emailAddress  : emailaddress,
            technical : technical,
            design : designing,
            management : management,
            sub_design:{
                uiux : uiux,
                graphic : graphic,
                video : video
            },
            sub_management:{
                writer : content,
                manager : manager
            },
            sub_technical:{
                machinelearning : machinelearning,
                frontend : frontend,
                backend : backend,
                python : python,
                android: android,
                general : general
            }
        };
        $.ajax({
            url:"/record",
            data:JSON.stringify(submission),
            method:"post",
            contentType:"application/json",
            success:(d)=>{
                if(d.message){
                    alert(d.message)
                }
                console.log(d)
            }
        })
        $('.form').fadeOut(300);
        setTimeout(function(){
            $('.thank-you').fadeIn(600);
        },300)
    });


    function checkForm(name, regno, email, ph) {
        if(!name || !regno || !email || !ph)
            return 5;
        if(!regno.match(/^1[5-9]...[0-9][0-9][0-9][0-9]$/))
            return 1;
        if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
            return 2;
        if(!name.match(/[a-zA-Z ]*/))
            return 3;
        if(!ph.match(/^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/))
            return 4;
        return 0;
    }


});
