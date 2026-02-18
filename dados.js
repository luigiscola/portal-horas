const dados = [
  { produto: "Vulnerability Manager Plus", edicao: "Enterprise", horas: 10, caminho: "Vulnerability Manager Plus/Vulnerability Manager Plus - Enterprise.docx" },
  { produto: "Vulnerability Manager Plus", edicao: "Professional", horas: 8, caminho: "Vulnerability Manager Plus/Vulnerability Manager Plus - Professional.docx" },

  { produto: "ADAudit Plus", edicao: "Professional", horas: 8, caminho: "AD Audit Plus/Escopo_de_Implantação_-_ADAudit_Professional.docx" },
  { produto: "ADAudit Plus", edicao: "Standard", horas: 8, caminho: "AD Audit Plus/ADAudit Plus - Standard.docx" },

  { produto: "Application Control Plus", edicao: "Professional", horas: 8, caminho: "Application Control Plus/Application Control Plus - Professional.docx" },
  { produto: "DeviceControl Plus", edicao: "Professional", horas: 8, caminho: "DeviceControl Plus/DeviceControl Plus - Professional.docx" },
  { produto: "Endpoint DLP Plus", edicao: "Professional", horas: 10, caminho: "Endpoint DLP Plus/Endpoint DLP Plus - Professional.docx" },
  { produto: "Browser Security Plus", edicao: "Professional", horas: 8, caminho: "Browser Security Plus/Browser Security Plus - Professional.docx" },

  { produto: "MDM Cloud", edicao: "Professional", horas: 12, caminho: "MDM Cloud/MDM Cloud - Professional.docx" },
  { produto: "MDM Cloud", edicao: "Standard", horas: 8, caminho: "MDM Cloud/MDM Cloud - Standard.docx" },

  { produto: "MDM On-Premise", edicao: "Standard", horas: 8, caminho: "MDM On-Premise/Mobile Device Manager Plus - Standard.docx" },
  { produto: "MDM On-Premise", edicao: "Professional", horas: 12, caminho: "MDM On-Premise/Mobile Device Manager Plus - Professional.docx" },

  { produto: "Endpoint Central Plus On-Premise", edicao: "Enterprise", horas: 14, caminho: "Endpoint Central Plus On-Premise/Endpoint Central Plus On-Premise - Enterprise.docx" },
  { produto: "Endpoint Central Plus On-Premise", edicao: "Professional", horas: 12, caminho: "Endpoint Central Plus On-Premise/Endpoint Central Plus On-Premise - Professional.docx" },
  { produto: "Endpoint Central Plus On-Premise", edicao: "Security", horas: 24, caminho: "Endpoint Central Plus On-Premise/Endpoint Central Plus On-Premise - Security.docx" },

  { produto: "Endpoint Central Plus Cloud", edicao: "Enterprise", horas: 12, caminho: "Endpoint Central Plus Cloud/Endpoint Central Plus Cloud - Enterprise.docx" },
  { produto: "Endpoint Central Plus Cloud", edicao: "UEM", horas: 12, caminho: "Endpoint Central Plus Cloud/Endpoint Central Plus Cloud - UEM.docx" },
  { produto: "Endpoint Central Plus Cloud", edicao: "Security", horas: 24, caminho: "Endpoint Central Plus Cloud/Endpoint Central Plus Cloud - Security.docx" },

  { produto: "Endpoint Central Cloud", edicao: "Enterprise", horas: 12, caminho: "Endpoint Central Cloud/Endpoint Central Cloud - Enterprise.docx" },
  { produto: "Endpoint Central Cloud", edicao: "UEM", horas: 12, caminho: "Endpoint Central Cloud/Endpoint Central Cloud - UEM.docx" },
  { produto: "Endpoint Central Cloud", edicao: "Security", horas: 24, caminho: "Endpoint Central Cloud/Endpoint Central Cloud - Security.docx" },

  { produto: "Endpoint Central On-Premise", edicao: "Enterprise", horas: 14, caminho: "Endpoint Central On-Premise/Endpoint Central On-Premise - Enterprise.docx" },
  { produto: "Endpoint Central On-Premise", edicao: "Professional", horas: 12, caminho: "Endpoint Central On-Premise/Endpoint Central On-Premise - Professional.docx" },
  { produto: "Endpoint Central On-Premise", edicao: "Security", horas: 24, caminho: "Endpoint Central On-Premise/Endpoint Central On-Premise - Security.docx" },

  { produto: "OpManager", edicao: "Standard", horas: 10, caminho: "OpManager/OpManager - Standard.docx" },
  { produto: "OpManager", edicao: "Professional", horas: 16, caminho: "OpManager/OpManager - Professional.docx" },
  { produto: "OpManager", edicao: "Enterprise", horas: 20, caminho: "OpManager/OpManager - Enterprise.docx" },

  { produto: "OpManager Plus", edicao: "Standard", horas: 14, caminho: "OpManager Plus/OpManager Plus - Standard.docx" },
  { produto: "OpManager Plus", edicao: "Professional", horas: 20, caminho: "OpManager Plus/OpManager Plus - Professional.docx" },
  { produto: "OpManager Plus", edicao: "Enterprise", horas: 24, caminho: "OpManager Plus/OpManager Plus - Enterprise.docx" },
  { produto: "OpManager Plus", edicao: "MSP", horas: 24, caminho: "OpManager Plus/OpManager Plus - MSP.docx" },

  { produto: "OpManager MSP", edicao: "Standard", horas: 14, caminho: "OpManager MSP/OpManager MSP - Standard.docx" },
  { produto: "OpManager MSP", edicao: "Professional", horas: 20, caminho: "OpManager MSP/OpManager MSP - Professional.docx" },
  { produto: "OpManager MSP", edicao: "Enterprise", horas: 24, caminho: "OpManager MSP/OpManager MSP - Enterprise.docx" },
  { produto: "OpManager MSP", edicao: "MSP", horas: 24, caminho: "OpManager MSP/OpManager MSP - MSP.docx" },

  { produto: "Applications Manager", edicao: "Professional", horas: 14, caminho: "Applications Manager/Applications Manager - Professional.docx" },
  { produto: "Applications Manager", edicao: "Enterprise", horas: 16, caminho: "Applications Manager/Applications Manager - Enterprise.docx" },

  { produto: "Site24x7", edicao: "Enterprise", horas: 14, caminho: "Site24x7/Site24x7 - Enterprise.docx" },

  { produto: "ServiceDesk Plus", edicao: "Standard", horas: 12, caminho: "ServiceDesk Plus/ServiceDesk Plus - Standard.docx" },
  { produto: "ServiceDesk Plus", edicao: "Professional", horas: 18, caminho: "ServiceDesk Plus/ServiceDesk Plus - Professional.docx" },
  { produto: "ServiceDesk Plus", edicao: "Enterprise", horas: 30, caminho: "ServiceDesk Plus/ServiceDesk Plus - Enterprise.docx" },

  { produto: "ServiceDesk Plus MSP", edicao: "Standard", horas: 12, caminho: "ServiceDesk Plus MSP/ServiceDesk Plus MSP - Standard.docx" },
  { produto: "ServiceDesk Plus MSP", edicao: "Professional", horas: 18, caminho: "ServiceDesk Plus MSP/ServiceDesk Plus MSP - Professional.docx" },
  { produto: "ServiceDesk Plus MSP", edicao: "Enterprise", horas: 30, caminho: "ServiceDesk Plus MSP/ServiceDesk Plus MSP - Enterprise.docx" },

  { produto: "ServiceDesk Plus Cloud", edicao: "Standard", horas: 12, caminho: "ServiceDesk Plus Cloud/ServiceDesk Plus Cloud - Standard.docx" },
  { produto: "ServiceDesk Plus Cloud", edicao: "Professional", horas: 18, caminho: "ServiceDesk Plus Cloud/ServiceDesk Plus Cloud - Professional.docx" },
  { produto: "ServiceDesk Plus Cloud", edicao: "Enterprise", horas: 30, caminho: "ServiceDesk Plus Cloud/ServiceDesk Plus Cloud - Enterprise.docx" },

  { produto: "ADManager Plus", edicao: "Standard", horas: 10, caminho: "ADManager Plus/ADManager Plus - Standard.docx" },
  { produto: "ADManager Plus", edicao: "Professional", horas: 14, caminho: "ADManager Plus/ADManager Plus - Professional.docx" },
  { produto: "ADManager Plus", edicao: "Enterprise", horas: 16, caminho: "ADManager Plus/ADManager Plus - Enterprise.docx" },

  { produto: "ADSelfService Plus", edicao: "Standard", horas: 10, caminho: "ADSelfService Plus/ADSelfService Plus - Standard.docx" },
  { produto: "ADSelfService Plus", edicao: "Professional", horas: 12, caminho: "ADSelfService Plus/ADSelfService Plus - Professional.docx" },
  { produto: "ADSelfService Plus", edicao: "Enterprise", horas: 14, caminho: "ADSelfService Plus/ADSelfService Plus - Enterprise.docx" },

  { produto: "Analytics Plus", edicao: "Professional", horas: 14, caminho: "Analytics Plus/Analytics Plus - Professional.docx" },
  { produto: "Analytics Plus", edicao: "Enterprise", horas: 16, caminho: "Analytics Plus/Analytics Plus - Enterprise.docx" },

  { produto: "GO-Global", edicao: "-", horas: 2, caminho: "GO-Global/GO-Global.docx" }
];