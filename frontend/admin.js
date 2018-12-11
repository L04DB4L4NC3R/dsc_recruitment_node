$("#pass").on("click",(e)=>{
    e.preventDefault();
    $.ajax({
        url:"/login",
        data:JSON.stringify({
            passphrase:$("#passphrase").val()
        }),
        contentType:"application/json",
        method:"POST",
        success:(data)=>{
            if(!data.token)
                alert("Wrong passphrase")
            else{
                localStorage.setItem("token",data.token)
                $("#first").html(`
                <div class="row">
                      <div class="input-field col s6">
                        <input placeholder="Enter domain" id="domain" type="text" class="validate">
                      </div>
                    </div>
                                
                      <div class="row">
                      <div class="input-field col s6">
                        <input placeholder="Enter subdomain" id="subdomain" type="text" class="validate">
                      </div>
                    </div>

                    <div class="input-field col s6">
                        <input placeholder="Enter year" id="year" type="number" class="validate">
                      </div>
      
                    <center><button id="getbtn" class="btn waves-effect waves-light" type="submit" name="action">Submit
                    </button></center>
                    <br>
                    <center><button id="logout" class="btn waves-effect waves-light" name="action">logout
                    </button></center>
                    <br>
                    <center><button id="count" class="btn waves-effect waves-light" name="action">Registration count
                    </button></center>


                    <div id="result"></div>

                    <script>


                    $("#logout").on("click", (e)=>{
                        e.preventDefault();
                        localStorage.clear();
                        $("#first").html("Logged out");
                        window.location.replace("/admin");
                    })


                    $("#count").on("click", (e)=>{
                        e.preventDefault();
                        $.get("/count", (resp)=>{
                            $("#count").html(resp.count);
                        })
                    })



                    $("#getbtn").on("click",(e)=>{
                        $("#result").html('');
                        e.preventDefault();
                        $.ajax({
                            url:"/show",
                            method:"POST",
                            data:{
                                domain:$("#domain").val(),
                                subdomain:$("#subdomain").val(),
                                year:$("#year").val()
                            },
                            headers:{"Authorization":localStorage.getItem("token")},
                            success:(data)=>{
                                for(let user of data){
                                    $("#result").append(['',
                                    '<center><div class="row">',
                                    '<div class="col s12 m6">',
                                    '  <div class="card blue-grey darken-1">',
                                    '    <div class="card-content white-text">',
                                    '      <span class="card-title">'+user.firstName+'</span>',
                                    ' <p><strong>Name: </strong>'+user.firstName+'</p>',
                                    ' <p><strong>Registration number: </strong>'+user.registrationNumber+'</p>',
                                    ' <p><strong>Phone number: </strong>  '+user.phoneNumber+'</p>',
                                    ' <p><strong>Email address: </strong> '+ user.emailAddress+'</p>',
                                    ' <p><strong>Answer 1: </strong>'+ user.answers.answerone   +'</p>',
                                    ' <p><strong>Answer 2: </strong>'+ user.answers.answertwo   +'</p>',
                                    ' <p><strong>Answer 3: </strong>'+ user.answers.answerthree +'</p>',
                                    ' <p><strong>Answer 4: </strong>'+ user.answers.answerfour  +'</p>',
                                    ' <p><strong>Answer 5: </strong>'+ user.answers.answerfive  +'</p>',
                                    '    </div>'  ,                        
                                    '  </div>',
                                    '</div>',
                                    ' </div></center><br><br><br><br>'])
                                }
                            }
                        })
                    })
                    </script>
                `)
            }
        }
    })
})



