$(document).ready(function(){



    $('.domain-category').click(function(){
        $(this).toggleClass('domain-category-clicked');
    });

    $('.home-page-holder').click(function(){
        $('.home-page').fadeOut(300);
        setTimeout(function() {
            $('.domains').fadeIn(600);
        },300);
    });

    $('.back').click(function(){
        $('.back').fadeOut(300);
        $('.technical-sub').fadeOut(300);
        $('.management-sub').fadeOut(300);
        $('.designing-sub').fadeOut(300);
        $('.form').fadeOut(300);
        $('.questions').fadeOut(300);
        x=0;
        y=0;
        z=0;
        technical = 0;
        management = 0;
        designing = 0;
        machinelearning = 0;
        frontend = 0;
        backend = 0;
        android = 0;
        python = 0;
        general = 0;
        uiux = 0;
        graphic = 0;
        video = 0;
        manager = 0;
        content = 0;
        $('.domain-category').removeClass('domain-category-clicked');
        setTimeout(function(){
            $('.domains').fadeIn(600);
        },300)
    });

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
        SubmitChecker();
    });

    $('#frontend').click(function(){
        frontend = !frontend;
        SubmitChecker();
    });

    $('#backend').click(function(){
        backend = !backend;
        SubmitChecker();
    });

    $('#python').click(function(){
        python = !python;
        SubmitChecker();
    });

    $('#android').click(function(){
        android = !android;
        SubmitChecker();
    });

    $('#general').click(function(){
        general = !general;
        SubmitChecker();
    });

    $('#uiux').click(function(){
        uiux = !uiux;
        SubmitChecker();
    });

    $('#graphic').click(function(){
        graphic = !graphic;
        SubmitChecker();
    });

    $('#video').click(function(){
        video = !video;
        SubmitChecker();
    });

    $('#manager').click(function(){
        manager = !manager;
        if (content==0 && manager==0){
            $('.managesubmitter').fadeOut();
        }
        else{
            $('.managesubmitter').fadeIn();
        }
    });

    $('#content').click(function(){
        content = !content;
        if (content==0 && manager==0){
            $('.managesubmitter').fadeOut();
        }
        else{
            $('.managesubmitter').fadeIn();
        }
    });

    $('#subdomains-start').click(function(){

        $('.domains').fadeOut(300);

        if(x==1){
            setTimeout(function(){
                $('.technical-sub').fadeIn(600);
                $('.back').fadeIn(600);
            },300);
            x=0;
        }

        else if(y==1){
            setTimeout(function(){
                $('.designing-sub').fadeIn(600);
                $('.back').fadeIn(600);
            },300);
            y=0;
        }

        else if(z==1){
            setTimeout(function(){
                $('.management-sub').fadeIn(600);
                $('.back').fadeIn(600);
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
        $('.form').fadeOut(300);
        setTimeout(function(){
            $('.questions').fadeIn(600);
        },300);
    });

    function SubmitChecker(){
        if (general==0 && android==0 && frontend==0 && python==0 && machinelearning==0 && backend==0){
            $('.techsubmitter').fadeOut();
        }
        else{
            $('.techsubmitter').fadeIn();
        }

        if (uiux==0 && graphic==0 && video==0){
            $('.designsubmitter').fadeOut();
        }
        else{
            $('.designsubmitter').fadeIn();
        }

        if (content==0 && manager==0){
            $('.managesubmitter').fadeOut();
        }
        else{
            $('.managesubmitter').fadeIn();
        }

        return 0;
    }

    var question_number = 1;

    $('#question-next').click(function(){
        question_number++;
        $('.question').fadeOut(300);
        setTimeout(function(){
            if(question_number == 2){
                $('#question-two').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 3){
                $('#question-three').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 4){
                $('#question-four').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 5){
                $('#question-five').fadeIn(600);
                $('#question-previous').fadeIn(600);
                $('#question-next').text('Submit');
            }
            else if(question_number==6){
                $('.questions').fadeOut(300);
                setTimeout(function(){
                    $('.thank-you').fadeIn(600);
                    var fname = document.getElementById("fname").value;
                    var regno = document.getElementById("regno").value;
                    var emailaddress = document.getElementById("emailaddress").value;
                    var phno = document.getElementById("phno").value;
                    var questionone = document.getElementById("question-one").value;
                    var questiontwo= document.getElementById("question-two").value;
                    var questionthree = document.getElementById("question-three").value;
                    var questionfour = document.getElementById("question-four").value;
                    var questionfive = document.getElementById("question-five").value;
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
                        },
                        answers:{
                            answerone : questionone,
                            answertwo : questiontwo,
                            answerthree : questionthree,
                            answerfour : questionfour,
                            answerfive : questionfive
                        }
                    };
                    JSON.stringify(submission);
                },300);
            }
        },300);
    })

    $('#question-previous').click(function(){
        question_number--;
        $('.question').fadeOut(300);
        setTimeout(function(){
            if(question_number == 1){
                $('#question-one').fadeIn(600);
                $('#question-next').fadeIn(600);
                $('#question-previous').fadeOut(600);
            }
            else if(question_number == 2){
                $('#question-two').fadeIn(600);
                $('#question-next').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 3){
                $('#question-three').fadeIn(600);
                $('#question-next').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 4){
                $('#question-four').fadeIn(600);
                $('#question-next').fadeIn(600);
                $('#question-previous').fadeIn(600);
                $('#question-next').text('Next');
            }
        },300);
    })


});
