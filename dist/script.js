
const generateManager = (manager)=>{
    return `
    <div class="manager shadow p-3 mb-5 bg-body rounded">
        <div class="p-3 mb-2 bg-primary text-white">
            <h2>${manager.name}</h2>
            <h3><i class="fas fa-mug-hot"></i> Manager</h3>
        </div>
        <div class="d-grid gap-3">
            <div class="p-2 bg-light border">ID: ${manager.id}</div>
            <div class="p-2 bg-light border">Email: ${manager.email}</div>
            <div class="p-2 bg-light border">Office number: ${manager.officeNumber}</div>
        </div>
    </div>`
}

const generateEngineer = (engineer)=>{
    return `
    <div class="engineer shadow p-3 mb-5 bg-body rounded">
        <div class="p-3 mb-2 bg-primary text-white">
            <h2>${engineer.name}</h2>
            <h3><i class="fas fa-glasses"></i> Engineer</h3>
        </div>
        <div class="d-grid gap-3">
            <div class="p-2 bg-light border">ID: ${engineer.id}</div>
            <div class="p-2 bg-light border">Email: ${engineer.email}</div>
            <div class="p-2 bg-light border">GitHub: ${engineer.GitHub}</div>
        </div>
    </div>`
}
const generateIntern = (intern)=>{
    return `
    <div class="intern shadow p-3 mb-5 bg-body rounded">
        <div class="p-3 mb-2 bg-primary text-white">
            <h2>${intern.name}</h2>
            <h3><i class="fas fa-user-graduate"></i> Intern</h3>
        </div>
        <div class="d-grid gap-3">
            <div class="p-2 bg-light border">ID: ${intern.id}</div>
            <div class="p-2 bg-light border">Email: ${intern.email}</div>
            <div class="p-2 bg-light border">School: ${intern.school}</div>
        </div>
    </div>`
}
const htmlHeadPart =`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
    </head>
    <body>
        <header>
            <nav class="nav justify-content-center  bg-danger ">
                <h1 class="display-1 p-3 mb-2 text-white">My Team</h1>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center">`

const htmlTailPart = `
                </div>
            </div>
        </main>
    </body>
</html>`

module.exports = {
    generateManager,
    generateEngineer,
    generateIntern,
    htmlHeadPart,
    htmlTailPart
}
