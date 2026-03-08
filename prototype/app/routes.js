// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

// A&E Triage Journey Routes
router.get('/pages/journey-ae-triage', (req, res) => {
  res.render('pages/journey-ae-triage/index');
});

router.get('/pages/journey-ae-triage/index', (req, res) => {
  res.render('pages/journey-ae-triage/index');
});

router.get('/pages/journey-ae-triage/language-selection', (req, res) => {
  res.render('pages/journey-ae-triage/language-selection');
});

router.get('/pages/journey-ae-triage/symptom-description', (req, res) => {
  res.render('pages/journey-ae-triage/symptom-description');
});

router.get('/pages/journey-ae-triage/translation-in-progress', (req, res) => {
  res.render('pages/journey-ae-triage/translation-in-progress');
});

router.get('/pages/journey-ae-triage/translation-review', (req, res) => {
  res.render('pages/journey-ae-triage/translation-review');
});

router.get('/pages/journey-ae-triage/safeguarding-escalation', (req, res) => {
  res.render('pages/journey-ae-triage/safeguarding-escalation');
});

router.get('/pages/journey-ae-triage/human-interpreter', (req, res) => {
  res.render('pages/journey-ae-triage/human-interpreter');
});

router.get('/pages/journey-ae-triage/triage-summary', (req, res) => {
  res.render('pages/journey-ae-triage/triage-summary');
});

router.get('/pages/journey-ae-triage/completion', (req, res) => {
  res.render('pages/journey-ae-triage/completion');
});

router.get('/pages/journey-ae-triage/bsl-connection', (req, res) => {
  res.render('pages/journey-ae-triage/bsl-connection');
});

router.get('/pages/journey-ae-triage/bsl-active', (req, res) => {
  res.render('pages/journey-ae-triage/bsl-active');
});

module.exports = router;
