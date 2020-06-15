<h1 align="center"> 🦖 DebunktCar 🦕 </h1>
<p align="center"><em>Ow yeahh it iz DONE. ( did you get it? no ? 😞 )</em></p>

---

## Description 📕

  A lot of you want to create a simple MongoDB CRUD with GraphQL.
  But hey, you want to try this new thing called `deno` too.
  Yup, try this example and go further explore things.
  Build and Improve your App using the latest techs indeed! 😁  

  Well this is just a simple CRUD, It'll cover the most basic template you would
  want to build a simple server, expect nothing more. 🙃  

  Just pull some requests / issues if you found one!  
  Thank you very much! ☺️

## Contributing 👉🏻👈🏻

  1. Install `deno`, **this** should be mandatory.
  2. Clone this thing.
  3. `cd debunkbet` and edit stuffs.
  4. Refer to this snippet on how to run the server.  
     ( created for you, because we are all lazy to type those. )

      ```console
      padul@universe:~$ chmod +x run
      ```

  5. Then run the server with `./run`
  
      ```console
      padul@universe:~$ ./run
      ```
      
  6. Should be on `http://localhost:4000`

## Queries 🖋

  - *Get all cars*

      ```graphql
      query getCars {
        getCars {
          id
          manufacturer
          name
          power
        }
      }
      ```

  - *Get car by its ID*

      ```graphql
      query getCarById($id: ID!){
        getCarById(id: $id){
          id
          manufacturer
          name
          power
        }
      }
      ```

      ```json
      {
        "id": "5ee74a120079915d000f5562"
      }
      ```

## Mutations 💪🏼

  - *Create a New Car*

      ```graphql
      mutation createCar($input: NewCar!){
        createCar(input: $input){
          id
          manufacturer
          name
          power
        }
      }
      ```

      ```json
      {
        "input": {
          "manufacturer": "Datsun",
          "name": "GO Panca",
          "power": 1200
        }
      }
      ```

  - *Update a Car by its ID*

      ```graphql
      mutation updateCar($input: EditCar!){
        updateCar(input: $input){
          id
          manufacturer
          name
          power
        }
      }
      ```

      ```json
      {
        "input": {
          "id": "5ee74a120079915d000f5562",
          "manufacturer": "Datsun",
          "name": "GO Panca +",
          "power": 1650
        }
      }
      ```

  - *Delete a Car by its ID*

      ```graphql
      mutation deleteCar($id: ID!){
        deleteCar(id: $id){
          id
          result
        }
      }
      ```

      ```json
      {
        "id": "5ee74a120079915d000f5562"
      }
      ```

## License 💳
 
 MIT
 
## Footnote

 Thanks for reading until the bottom of this README, press the star button if you like it ! ⭐️
 
