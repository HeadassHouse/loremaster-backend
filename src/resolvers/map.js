const { ApolloError } = require('apollo-server');
const { CreateDocument, GetDocument } = require('../utils/database');
const { schema:Map } = require('../models/map');

module.exports = {
    Query: {
        getMap: ( _, { id, where } ) => {
            if (id && where) {
                throw new ApolloError("Cannot specify id and where clause!");
            } 
            else if (id) {    
                
            } 
            else if (where){
                
            } 
            else {
                throw new ApolloError("Must provide an id or a where clause!");
            }
        }
    },
    Mutation: {
        createMap: (_, { map }) => {
            return CreateDocument(Map, map)
                .then( () => { 
                    return {
                        code: 200,
                        message: "Successfully inserted Map"
                    }
                })
                .catch( (error) => {
                    return {
                        code: 400,
                        message: error
                    }
                });
        }
    }
}