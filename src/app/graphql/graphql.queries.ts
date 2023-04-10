import {gql} from 'apollo-angular'

const ALL = gql`
  query {
    findAll {
      id
      firstname
      username
      lastname
      email
      role
    }
  }
`

const CREATE = gql`
  mutation create($username: String!, $firstname: String!, $lastname: String!, $email: String!) {
    create(username: $username, firstname: $firstname, lastname: $lastname, email: $email) {
      id
      firstname
      username
      lastname
      email
      role
    }
  }
`

const DELETE = gql`
  mutation delete($id: ID!) {
    delete(id: $id)
  }
`;

const UPDATE = gql`
  mutation update($id: ID!,$username: String!, $firstname: String!, $lastname:String!, $email: String!) {
    update(id: $id,username: $username firstname: $firstname, lastname: $lastname, email: $email){
      id
      firstname
      username
      lastname
      email
      role
    }
  }
`;

const GET = gql`
  mutation get($id: ID!) {
    get(id: $id){
      id
      firstname
      username
      lastname
      email
      role
    }
  }
`;


export {GET, UPDATE, ALL, CREATE, DELETE}
