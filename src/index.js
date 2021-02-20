const express=require('express');
const cors=require('cors')
const app=express();
const swaggerJSDoc=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');
const {createEmployee,createTeam,createEmployeeAssignment}=require('./create')
const {getAllEmployees,getAllTeams,getEmployee,getTeam}=require('./read')
const {updateEmployee,updateTeam}=require('./update')
const {deleteEmployee,deleteTeam,deleteEmployeeAssignment}=require('./delete')

const swaggerOptions={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Employee Management API',
            version:'1.0.0',
            description:'Employe Api for employee management',
            contact:{
                name:'Miguel Angel Rapser',
                url:'https://www.google.com',
                email:'migrapser@gmail.com'
            },
            servers:["http://localhost:3000"]
        }
    },
    apis:["src/index.js"]
}
const swaggerDocs=swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));


const {}=require('./update')
var corsOptions={
    origin:'http://example.com',
    optionSuccessStatus:200
}

app.use(express.json());

/**
 * @swagger
 * components:
 *   schemas:
 *      Employee:
 *       type: object
 *       properties:
 *          name:
 *              type: string
 *              description: name of the employee
 *          date_of_joining:
 *              type: string
 *              description: date of joining of the employee
 *          email:
 *              type: string
 *              description: email of the employee
 *          gender:
 *              type: string
 *              description: gender of the employee
 *          bio:
 *              type: string
 *              description: biography of the employee
 *          designation:
 *              type: string
 *              description: designation of the employee
 *       example:
 *         name: Bruno
 *         date_of_joining: 20-04-2021
 *         email: brunitoz@gmail.com
 *         gender: male
 *         bio: ingeniero, emprendedor, innovador
 *         designation: ios developer
 */

 /**
 * @swagger
 * components:
 *   schemas:
 *       Team:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: name of the team
 *              email:
 *                  type: string
 *                  description: email of the team
 *              description:
 *                  type: string
 *                  description: description of the team
 *          example:
 *              name: Apple
 *              email: steve@gmail.com
 *              author: Miguel Rapser
 */

 /**
  * @swagger
  * tags:
  *   name: Employee
  *   description: The employee managing API
  */

  /**
  * @swagger
  * tags:
  *   name: Team
  *   description: The team managing API
  */


/**
 * @swagger
 * definitions:
 *  Employee:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the employee
 *     example: 'Jayaramachandran'
 *    date_of_joining:
 *     type: string
 *     description: date of joining of the employee
 *     example: '2020-08-30'
 *    email:
 *     type: string
 *     description: email of the employee
 *     example: 'jayaramachandran@whizpath.com'
 *    gender:
 *     type: string
 *     description: gender of the employee
 *     example: 'male'
 *    bio:
 *     type: string
 *     description: biography of the employee
 *     example: 'father, software developer'
 *    designation:
 *     type: string
 *     description: designation of the employee
 *     example: 'Software Engineer'
 *  Team:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the team
 *     example: 'javscript'
 *    email:
 *     type: string
 *     description: email of the team
 *     example: 'javascript@whizpath.com'
 *    description:
 *     type: string
 *     description: description of the team
 *     example: 'javascript developers'
 *  Employee_Assignment:
 *   type: object
 *   properties:
 *    employee_id:
 *     type: integer
 *     description: id of the employee
 *     example: 2
 *    team_id:
 *     type: integer
 *     description: id of the team
 *     example: 2
 */


 /**
  * @swagger
  * /employee:
  *  post:
  *   summary: create employee
  *   tags: [Employee]
  *   description: create employee for the organisation
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Employee'
  *   responses:
  *    200:
  *     description: employee created succesfully
  *    500:
  *     description: failure in creating employee
  */
app.post("/employee", createEmployee);
/**
 * @swagger
 * /team:
 *  post:
 *   summary: create team
 *   tags: [Team]
 *   description: create team
 *   parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      description: body of the team
 *      schema:
 *       $ref: '#/definitions/Team'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Team'
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description : error
 */
app.post("/team", createTeam);
/**
 * @swagger
 * /employeeassignment:
 *  post:
 *   summary: create employee assignment
 *   tags: [EmployeeAssign]
 *   description: create employee assignment
 *   parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      description: employee assignment of the team
 *      schema:
 *       $ref: '#/definitions/Employee_Assignment'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Employee_Assignment'
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.post("/employeeassignment",createEmployeeAssignment);

/**
 * @swagger
 * /employees:
 *  get:
 *   summary: get all employees
 *   tags: [Employee]
 *   description: get all employees
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get('/employees',cors(), getAllEmployees)
/**
 * @swagger
 * /teams:
 *  get:
 *   summary: get all teams
 *   tags: [Team]
 *   description: get all teams
 *   responses:
 *    200:
 *     description: success
 */
app.get('/teams',cors(), getAllTeams)
/**
 * @swagger
 * /employee/{employee_id}:
 *  get:
 *   summary: get employee
 *   tags: [Employee]
 *   description: get employee
 *   parameters:
 *    - in: path
 *      name: employee_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the employee
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.get('/employee/:id',cors(), getEmployee)
/**
 * @swagger
 * /team/{team_id}:
 *  get:
 *   summary: create team
 *   tags: [Team]
 *   description: create team
 *   parameters:
 *    - in: path
 *      name: team_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the team
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.get('/team/:id',cors(), getTeam)

/**
 * @swagger
 * /employee/{id}:
 *  put:
 *   summary: update employee
 *   tags: [Employee]
 *   description: update employee
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the employee
 *      example: 2
 *    - in: body
 *      name: body
 *      required: true
 *      description: body object
 *      schema:
 *       $ref: '#/definitions/Employee'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Employee'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/Team'
 */
app.put("/employee/:id",cors(corsOptions),updateEmployee)


/**
 * @swagger
 * /team/{id}:
 *  put:
 *   summary: update team
 *   tags: [Team]
 *   description: update team
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the team
 *      example: 2
 *    - in: body
 *      name: body
 *      required: true
 *      description: body object
 *      schema:
 *       $ref: '#/definitions/Team'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Team'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/Team'
 */
app.put("/team/:id",cors(corsOptions),updateTeam)

/**
 * @swagger
 * /employee/{employee_id}:
 *  delete:
 *   summary: delete employee
 *   tags: [Employee]
 *   description: delete employee
 *   parameters:
 *    - in: path
 *      name: employee_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the employee
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.delete("/employee/:id",deleteEmployee)


/**
 * @swagger
 * /team/{team_id}:
 *  delete:
 *   summary: delete team
 *   tags: [Team]
 *   description: delete team
 *   parameters:
 *    - in: path
 *      name: team_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the team
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.delete("/team/:id",deleteTeam)
/**
 * @swagger
 * /employeeassign/{employee_id}/{team_id}:
 *  delete:
 *   summary: delete employee assignment
 *   tags: [EmployeeAssign]
 *   description: delete employee assignment
 *   parameters:
 *    - in: path
 *      name: employee_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the employee
 *      example: 12
 *    - in: path
 *      name: team_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the team
 *      example: 12
 *   responses:
 *    200:
 *     description: success
 */
app.delete("/employeeassign/:employee_id/:team_id",deleteEmployeeAssignment)


app.listen(3000,()=>{
    console.log("server listening in port 3000");
})