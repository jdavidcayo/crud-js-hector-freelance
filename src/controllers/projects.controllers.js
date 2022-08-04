import { Project } from '../models/Project.js'

export const getProjects = async ( req , res ) => {
    try {
        const projects = await Project.findAll();
        res.json( projects );
        }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
};

export const getProject = async ( req, res ) =>{
    const { id } = req.params;

    try {
        const project = await Project.findOne({
            where: {
                id
            }
        })
        if(!project) res.status( 404 ).json({message: "No se ha encontrado el proyecto."});
        
        res.json( project );
    } catch (error) {
        return res.status( 500 ).json({ message: error.message });
    }
}
export const setProject = async (req, res) => {
    const {name, description } = req.body;

    try {
        const newProject = await Project.create({
            name: name,
            description: description,
        });

        res.json( newProject );    
    } catch (error) {
        //500 error interno de sistema
        return res.status(500).json({message: error.message });
    }
};

export const updateProject = async (req, res) => {
 
 const { id } = req.params;
 const { name, description } = req.body;

 try {
     const project = await Project.findByPk( id );
     project.name = name;
     project.description = description;
    
     await project.save()
     
     res.json(project);    
 } catch (error) {
     return res.status(500).json({message: error.message})
 }
};
export const deleteProject = async (req, res) => {
    const {id} = req.params;

    try {
        await Project.destroy({
            where: {
                id: id,
            }
        })
        //204 todo fue bien pero no muestro mensaje.
        res.sendStatus(204);
        
    } catch (error) {
        //500 Error interno de sistema
        return res.status(500).json({message: error.message });
    }
    
};

