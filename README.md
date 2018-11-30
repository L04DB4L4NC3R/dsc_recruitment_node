## DSC Recruitment portal
Record and show recruitment details

<br />

| route |  type  |  data  |  response  |
|---|---|---|---|
| /record | POST | User object | New record added | 
| /show | POST with Authorization:token | {"query":"reg", "param": "17BCE2009"} (optional) | []User object or User object |
| /manager/record | POST | User object | OK|
| /admin/login | POST | {"passphrase":"some passphrase"} | {token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZXZlbCI6ImFkbWluIiwiaWF0IjoxNTQzNTc5Njg5fQ.wOE2EyoXSeNZ-YfsNWVwAWplPDEXI0yAWQ-pn6p7Hb8"} | 

<br />
<br />

### User object

<br />

```json
{
    "Name":"dhruv sharma",
    "Email":"dhruvsharma1016@gmail.com",
    "Reg":"16BCE0955",
    "ApplicantType":"design",
    "q1":"answer",
    "q2":"answer",
    "q3":"answer",
    "q4":"answer",
    "q5":"answer",
    "q6":"answer",
    "q7":"answer",
    "q8":"answer",
    "q9":"answer",
    "q10":"answer"
}
```

<br />
<br />

