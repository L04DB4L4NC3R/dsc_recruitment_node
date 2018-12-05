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
        technical = false;
        management = false;
        designing = false;
        machinelearning = false;
        frontend = false;
        backend = false;
        android = false;
        python = false;
        general = false;
        uiux = false;
        graphic = false;
        video = false;
        manager = false;
        content = false;
        $('.domain-category').removeClass('domain-category-clicked');
        setTimeout(function(){
            $('.domains').fadeIn(600);
        },300)
    });

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
                    var q1 = document.getElementById("answer-one").value;
                    var q2= document.getElementById("answer-two").value;
                    var q3 = document.getElementById("answer-three").value;
                    var q4 = document.getElementById("answer-four").value;
                    var q5 = document.getElementById("answer-five").value;
                    console.table(fname, regno, emailaddress, phno, q1, q2, q3, q4, q5)
                    switch (checkForm(fname, regno, emailaddress, phno, q1, q2, q3, q4, q5) ){
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
                        },
                        answers:{
                            answerone : q1,
                            answertwo : q2,
                            answerthree : q3,
                            answerfour : q4,
                            answerfive : q5
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
                },300);
            }
        },300);
    })
    function checkForm(name, regno, email, ph,q1,q2,q3,q4,q5) {
        if(!name || !regno || !email || !ph || !q1 || !q2 || !q3 
            || !q4 || !q4)
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
