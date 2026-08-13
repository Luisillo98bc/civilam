import test from 'node:test';
import assert from 'node:assert/strict';
import { escapeHtml, isValidEmail, isValidPhone, normalizeText } from '../src/lib/form-validation.ts';

test('normaliza y limita texto recibido', () => {
  assert.equal(normalizeText('  proyecto civil  ', 10), 'proyecto c');
  assert.equal(normalizeText(null, 10), '');
});

test('valida correos básicos y rechaza entradas inválidas', () => {
  assert.equal(isValidEmail('cliente@empresa.pe'), true);
  assert.equal(isValidEmail('correo-invalido'), false);
  assert.equal(isValidEmail('a@b'), false);
});

test('valida teléfonos con formato internacional o local', () => {
  assert.equal(isValidPhone('+51 989 746 162'), true);
  assert.equal(isValidPhone('123'), false);
});

test('escapa contenido HTML antes de crear el correo', () => {
  assert.equal(escapeHtml('<script>"x" & y</script>'), '&lt;script&gt;&quot;x&quot; &amp; y&lt;/script&gt;');
});
