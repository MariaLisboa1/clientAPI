# Client Api

> ## Routes

### User

1. ✅ POST /users

   - Request

   ```
   {
     "email": "test@email.com",
     "name": "test",
     "password": "123456"
   }
   ```

   - response 201

   ```
   {
     "_id": "5ea772b362ec9f2c642d11be",
     "email": "test@test.com",
     "name": "test",
     "password": "$2b$10$7yf.McM2/rsuy9XJVXNqoeejwmtkJf0dJp.O9naIcpJJaYH413gOO",
     "avatar": "https://res.cloudinary.com/ddtdxeaxl/image/upload/v1588001400/f4a6ca4e-cbfd-437b-89df-78a5b4c0c65d_axmusu.jpg"
   }
   ```

2. ✅ GET /users/:id

   - Headers: `{ "authorization": "Bearer {token}"}`
   - Request: `/users/{userId}`

   - response 200

   ```
   {
     "_id": "5ea772b362ec9f2c642d11be",
     "email": "test@test.com",
     "name": "test",
     "password": "$2b$10$7yf.McM2/rsuy9XJVXNqoeejwmtkJf0dJp.O9naIcpJJaYH413gOO",
     "avatar": "https://res.cloudinary.com/ddtdxeaxl/image/upload/v1588001400/f4a6ca4e-cbfd-437b-89df-78a5b4c0c65d_axmusu.jpg"
   }
   ```

3. ✅ PUT /users/avatar/:id

   - Request: `/users/avatar/{userId}` enviando a imagem de avatar do usuario

   - response 204

   ```
   null
   ```

### Client

1. ✅ POST /clients

   - Headers: `{ "authorization": "Bearer {token}"}`
   - Request

   ```
   {
      "name":"maria nazare santos lisboa",
      "cpf":"123456789",
      "phone":"11940266666",
      "birth_date":"31121995",
      "address":{
        "cep":"00000000",
        "publicPlace":"rua teste",
        "num":"99",
        "neighborhood":"bairro teste"
      },
      "vehicle":{
        "value":"R$ 179.933,00",
        "brand":102,
        "model":"5986",
        "yearModel":32000,
        "fuel":"String",
        "codeFipe":"501034-9",
        "referenceMonth":"maio de 2020 ",
        "vehicleType":3,
        "fuelAbbreviation":"D",
        "type":"caminhoes",
        "year":"32000-3"
      }
    }
   ```

   - response 201

   ```
   {
      "_id": "5eb4916ee61341190ce7633b",
      "name": "maria nazare santos lisboa",
      "cpf": "123456789",
      "phone": "11940266666",
      "birth_date": "31121995",
      "address": {
        "_id": "5eb4916ee61341190ce7633c",
        "cep": "00000000",
        "publicPlace": "rua teste",
        "num": "99",
        "neighborhood": "bairro teste"
      },
      "vehicle": {
        "image": "https://res.cloudinary.com/ddtdxeaxl/image/upload/v1588001402/1aa00d9f-7b95-44a2-9032-e08b4e55aeac_edzoyu.jpg",
        "_id": "5eb4916ee61341190ce7633d",
        "value": "R$ 179.933,00",
        "brand": "102",
        "model": "5986",
        "yearModel": 32000,
        "fuel": "String",
        "codeFipe": "501034-9",
        "referenceMonth": "maio de 2020 ",
        "vehicleType": 3,
        "fuelAbbreviation": "D"
      },
      "__v": 0
    }
   ```

2. ✅ GET /clients/

   - Headers: `{ "authorization": "Bearer {token}"}`
   - Request: `/clients`

   - response 200

   ```
   [
      {
        "_id": "5eb32968e1980200178caeb7",
        "name": "MARIA NAZARE SANTOS LISBOA",
        "cpf": "10876280408",
        "phone": "82996519260",
        "address": {
          "_id": "5eb32968e1980200178caeb8",
          "cep": "57010830",
          "publicPlace": "rar",
          "num": "73",
          "neighborhood": "arar"
        },
        "vehicle": {
          "image": "https://res.cloudinary.com/ddtdxeaxl/image/upload/v1588001402/1aa00d9f-7b95-44a2-9032-e08b4e55aeac_edzoyu.jpg",
          "_id": "5eb32968e1980200178caeb9",
          "brand": "102",
          "model": "5986",
          "yearModel": 32000,
          "codeFipe": "501034-9",
          "referenceMonth": "maio de 2020 ",
          "vehicleType": 3,
          "fuelAbbreviation": "D"
        },
        "__v": 0
      }
   ]
   ```

3. ✅ GET /clients/:id

   - Headers: `{ "authorization": "Bearer {token}"}`
   - Request: `/clients/5eb32968e1980200178caeb7`

   - response 200

   ```
    {
      "_id": "5eb32968e1980200178caeb7",
      "name": "MARIA NAZARE SANTOS LISBOA",
      "cpf": "10876280408",
      "phone": "82996519260",
      "address": {
        "_id": "5eb32968e1980200178caeb8",
        "cep": "57010830",
        "publicPlace": "rar",
        "num": "73",
        "neighborhood": "arar"
      },
      "vehicle": {
        "image": "https://res.cloudinary.com/ddtdxeaxl/image/upload/v1588001402/1aa00d9f-7b95-44a2-9032-e08b4e55aeac_edzoyu.jpg",
        "_id": "5eb32968e1980200178caeb9",
        "brand": "102",
        "model": "5986",
        "yearModel": 32000,
        "codeFipe": "501034-9",
        "referenceMonth": "maio de 2020 ",
        "vehicleType": 3,
        "fuelAbbreviation": "D"
      },
      "__v": 0
    }
   ```

4. ✅ POST /clients/image/:id

   - Headers: `{ "authorization": "Bearer {token}"}`
   - Request: `/clients/image/5eb32968e1980200178caeb7`
   - enviando a imagem do automovel

   - response 204

   ```
   null
   ```

5. ✅ PUT /clients/:id

   - Headers: `{ "authorization": "Bearer {token}"}`
   - Request `/clients/5eb32968e1980200178caeb7`

   ```
    {
      "name":"José Henrique Gomes",
      "cpf":"123456789",
      "phone":"11940266666",
      "birth_date":"31121995",
      "address":{
        "cep":"00000000",
        "publicPlace":"rua teste",
        "num":"99",
        "neighborhood":"bairro teste"
      },
      "vehicle":{
        "value":"R$ 179.933,00",
        "brand":102,
        "model":"5986",
        "yearModel":32000,
        "fuel":"String",
        "codeFipe":"501034-9",
        "referenceMonth":"maio de 2020 ",
        "vehicleType":3,
        "fuelAbbreviation":"D",
        "type":"caminhoes",
        "year":"32000-3"
      }
    }
   ```

   - response 204

   ```
   null
   ```

6. ✅ DELETE /clients/:id

   - Headers: `{ "authorization": "Bearer {token}"}`
   - Request: `/clients/5eb32968e1980200178caeb7`

   - response 204

   ```
   null
   ```

### Authentication

1. ✅ POST /login

   - Request

   ```
   {
     "email": "test@email.com",
     "password": "123456"
   }
   ```

   - response 200

   ```
   {
     "auth": true,
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYTc2ZmI1ZjhiZmEyMTYwNDRhNjEwMSIsImlhdCI6MTU4ODAzMTYzNX0.TN5m9MfRUuBBcImMBCFLMvnDZ4Z23t3VFGZUxPGcwIc"
   }
   ```

2. ✅ GET /logout

   - Request: `/logout`

   - response 200

   ```
   {
     "auth": false,
     "token": null
   }
   ```

> ## Exceções

1. ✅ Retorna erro **404** se o dado não existir
2. ✅ Retorna erro **400** se passal algum dado invalido
3. ✅ Retorna erro **401** se não estiver autenticado
4. ✅ Retorna erro **500** caso o servidor esteja com problemas
