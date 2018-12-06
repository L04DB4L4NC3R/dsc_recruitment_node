## DSC Recruitment portal
Record and show recruitment details

<br />

| route |  type  |  data  |  response  |
|---|---|---|---|
| /record | POST | User object | User object | 
| /show | POST with Authorization:token | {"domain":"technical", "subdomain": "machinelearning"} | 
[]User object |
| /login | POST | {"passphrase":"some passphrase"} | {token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZXZlbCI6ImFkbWluIiwiaWF0IjoxNTQzNTc5Njg5fQ.wOE2EyoXSeNZ-YfsNWVwAWplPDEXI0yAWQ-pn6p7Hb8"} | 

<br />
<br />

### User object

<br />

```json

{
    "sub_design": {
        "uiux": false,
        "graphic": false,
        "video": false
    },
    "sub_management": {
        "writer": false,
        "manager": false
    },
    "sub_technical": {
        "machinelearning": true,
        "frontend": false,
        "backend": false,
        "python": false,
        "android": false,
        "general": false
    },
    "answers": {
        "answerone": "aaaaa",
        "answertwo": "bbbb",
        "answerthree": "cccc",
        "answerfour": "dddd",
        "answerfive": "eeeee"
    },
    "technical": true,
    "design": false,
    "management": false,
    "_id": "5c08f9e9bed9e45a40de026c",
    "firstName": "angad sharma",
    "registrationNumber": "17BCE2009",
    "phoneNumber": "1111111111",
    "emailAddress": "sadsda@l.com",
    "__v": 0
}

```

<br />
<br />

