const router = require("express").Router();
let Note = require("../models/notes.model") // Using model created in another folder

router.get("/", (req, res) => {
    Note.find()
        .then(notes => res.json(notes))
        .catch(err => console.log(err))
})

router.post("/", (req, res) => {
    const title = req.body.title;
    const content = req.body.content    
    
    const newNote = new Note({
        title,
        content
    })

    newNote.save()
        .then(() => res.json("Note added."))
        .catch(err => res.status(400).json("Error: " + err))
})

router.delete("/:id", (req, res) => {
    Note.findByIdAndDelete(req.params.id)
        .then(() => res.json("Note deleted"))
        .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;