# CSRF Scenarios

💣 Multiple scenarios for CSRF attack.

## Scenarios

1. Scenario number 1:
   - No Anti-CSRF Token protection.
   - GET requests have side effects.
   - SameSite: Lax.
   - Completely vulnerable. 💣
1. Scenario number 2:
   - No Anti-CSRF Token protection.
   - GET requests **don't** have side effects.
   - SameSite: Lax.
   - Not vulnerable if the browser supports SameSite flag. ⚠️
1. Scenario number 3:
   - Protected by Anti-CSRF Token.
   - GET requests **don't** have side effects.
   - SameSite: Lax.
   - Not vulnerable. 💎
1. Scenario number 4:
   - No Anti-CSRF Token protection.
   - GET requests have side effects.
   - SameSite: None.
   - Completely vulnerable. 💣
1. Scenario number 5:
   - No Anti-CSRF Token protection.
   - GET requests **don't** have side effects.
   - SameSite: None.
   - Completely vulnerable. 💣
1. Scenario number 6:
   - No Anti-CSRF Token protection.
   - GET requests **don't** have side effects.
   - SameSite: Lax.
   - Vulnerable to XSS. ☠️
   - Completely vulnerable. 💣
1. Scenario number 7:
   - Protected by Anti-CSRF Token.
   - GET requests **don't** have side effects.
   - SameSite: Lax.
   - Vulnerable to XSS. ☠️
   - Completely vulnerable. 💣
