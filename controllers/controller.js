// Import the model to use its database functions.
var path = require("path");
var db = require("../models");

module.exports = function (app) {

  // HTML ROUTES
  //=================================================================================

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // API ROUTES
  //=================================================================================

  // GET all target audit or all audits and the single target's room data
  app.get("/api/audit/:AuditId", function (req, res) {

    let auditTarget = req.params.AuditId;
    let result = {};

    if (auditTarget == 0) {
      db.Audit.findAll()
      .then(function (auditData) {

          if (auditData[0]) {
            db.Room.findAll({ where: { AuditId: auditData[0].id } })
            .then(function (roomData) {
              result.auditData = auditData;
              result.roomData = roomData;
              result.success = true;
              res.json(result);
            });
          } else {
            result.success = true;
            res.json(result.message = "No results");
          }

      }).catch(function (err) {
        res.json({error: err.message})
      });;

    } else {

      db.Audit.findAll({ 
        where: {id: auditTarget} 
      }).then(function (auditData) {

        if (auditData[0]) {
          db.Room.findAll({ where: { AuditId: auditData[0].id } })
          .then(function (roomData) {
            result.auditData = auditData;
            result.roomData = roomData;
            result.success = true;
            res.json(result);
          });
        } else {
          result.message = "No results";
          result.success = true;
          res.json(result);
        }

      }).catch(function (err) {
        res.json({error: err.message})
      });;
    }

  });

  // Audits
  //=====================================================================================
  
  // Create Audit
  app.post("/api/audit/add", function (req, res) {

    db.Audit.create({
      site: req.body.site,
      date: req.body.date    
    }).then(function () {
      res.json({success: true});
    }).catch(function (err) {
      res.json({error: err.message})
    });

  });

  // Edit Audit
  app.put("/api/audit/edit", function (req, res) {
    db.Audit.update({
      site: req.body.site,
      date: req.body.date 
    }, {
        where: {
          id: req.body.AuditId
        }
      }).then(function (data) {
        data.success = true;
        res.json(data);
      }).catch(function (err) {
        res.json({error: err.message})
      });;
  });

  // Delete Audit
  app.delete("/api/audit/delete", function (req, res) {
    db.Audit.destroy({
      where: { id: req.body.AuditId },
    }).then(function () {
      res.json({sucess: true});
    }).catch(function (err) {
      res.json({error: err.message})
    });;
  });

  // Rooms
  //=====================================================================================

  // Get 1 Room
  app.get("/api/room/:id", function (req, res) {

    db.Room.findOne({
      where: { id: req.params.id}
    }).then(function (roomData) {
      let data = {};
      data.roomData = roomData;
      data.success = true;
      res.json(data);
    }).catch(function (err) {
      res.json({error: err.message})
    });

  });

  // Create Room
  app.post("/api/room/add", function (req, res) {

    db.Room.create({
      name: req.body.name,
      AuditId: req.body.AuditId
    }).then(function () {
      res.json({success: true});
    }).catch(function (err) {
      res.json({error: err.message})
    });

  });

  // Edit Audit
  app.put("/api/room/edit", function (req, res) {
    db.Room.update({
      name: req.body.name,
      c1: req.body.c1,
      c1_ns: req.body.c1_ns,
      c1_b: req.body.c1_b,
      c1_nm: req.body.c1_nm,
      c1_po: req.body.c1_po,
      c2: req.body.c2,
      c2_m: req.body.c2_m,
      c2_nor: req.body.c2_nor,
      c2_b: req.body.c2_b,
      c3: req.body.c3,
      c3_nl: req.body.c3_nl,
      c3_ns: req.body.c3_ns,
      c3_ic: req.body.c3_ic,
      c4: req.body.c4,
      c4_m: req.body.c4_m,
      c4_b: req.body.c4_b,
      c4_o: req.body.c4_o,
      c5: req.body.c5,
      c5_50: req.body.c5_50,
      c5_20: req.body.c5_20,
      c6: req.body.c6,
      c6_ct: req.body.c6_ct,
      c6_l: req.body.c6_l,
      c6_fc: req.body.c6_fc,
      c7: req.body.c7,
      c8: req.body.c8,
      c9: req.body.c9,
      c9_u: req.body.c9_u,
      c9_d: req.body.c9_d,
      c9_hec: req.body.c9_hec, 
      c9_dc: req.body.c9_dc,
      c9_ecup: req.body.c9_ecup,
      c10: req.body.c10,
      c10_u: req.body.c10_u,
      c11: req.body.c11,
      c11_piaf: req.body.c11_piaf,
      c11_c: req.body.c11_c,
      c11_sh: req.body.c11_sh,
      c12: req.body.c12,
      c13: req.body.c13,
      c13_s: req.body.c13_s,
      c13_c: req.body.c13_c,
      c13_t: req.body.c13_t,
      c13_d: req.body.c13_d,
      c13_v: req.body.c13_v,
      notes: req.body.notes
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (data) {
        data.success = true;
        res.json(data);
      }).catch(function (err) {
        res.json({error: err.message})
      });;
  });

  // Delete Audit
  app.delete("/api/room/delete", function (req, res) {
    db.Room.destroy({
      where: { id: req.body.id },
    }).then(function () {
      res.json({sucess: true});
    }).catch(function (err) {
      res.json({error: err.message})
    });;
  });

} // close module export function
