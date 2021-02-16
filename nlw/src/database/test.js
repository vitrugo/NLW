const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

  //inserção de dados
    await saveOrphanage (db, {
      lat: "-13.0057305",
      lng: "-38.5140499",
      name: "Lar dos meninos",
      about: "Presta assistencia a criancas de a 06 a 15 anos que se encontre em situacao de risto c/ou vulnerabilidade social.",
      whatsapp: "993225323",
      images: [
          "https://images.unsplash.com/photo-1601961782696-188d8d81fe7b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",

          "https://images.unsplash.com/photo-1602669387976-9c64dec62b84?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
      ].toString(),
      instructions: "Venha como se sentir a vontade e traga muito amor e paciencia para dar",
      opening_hours: "Horario de visitas Das 18h ate 8h",
      open_on_weekends: "0"
  })

//consultar os dados
  const selectOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectOrphanages)

  //consultar os dados por id        
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
  console.log(orphanage)

  //remover um dados
   console.log(await db.run("DELETE FROM orphanages WHERE id = '1'"))
   console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))

})
