---
id: index
title: Active Directory
description: Authentication abuse, Kerberos attacks, delegation weaknesses, ACL exploitation, and enterprise privilege escalation research.
---

## Research Areas

<div class="vuln-grid">
  <div class="vuln-item">
    <span>Kerberos Abuse</span>
    <p>
      Ticket attacks, constrained delegation,
      unconstrained delegation, and SPN abuse.
    </p>
  </div>
  <div class="vuln-item">
    <span>ACL Exploitation</span>
    <p>
      GenericAll, WriteDACL, WriteOwner,
      inheritance abuse, and privilege escalation paths.
    </p>
  </div>
  <div class="vuln-item">
    <span>AD CS</span>
    <p>
      ESC1–ESC8 certificate abuse,
      NTLM relay chains, and certificate impersonation.
    </p>
  </div>
  <div class="vuln-item">
    <span>Shadow Credentials</span>
    <p>
      msDS-KeyCredentialLink abuse,
      PKINIT authentication, and stealth persistence.
    </p>
  </div>
</div>

## Common Vulnerabilities

| Technique | Description |
|---|---|
| Kerberoasting | Service ticket extraction and offline cracking |
| AS-REP Roasting | Cracking users without Kerberos pre-authentication |
| RBCD | Resource-based constrained delegation abuse |
| DCSync | Replication rights abuse for credential extraction |
| Shadow Credentials | Certificate-based persistence and authentication |
| ACL Abuse | Privilege escalation through object permissions |