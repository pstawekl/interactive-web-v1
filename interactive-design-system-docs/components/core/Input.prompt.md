Form text fields with the brand purple focus ring (3px glow).

```jsx
<label className="in-eyebrow">Imię i nazwisko</label>
<Input placeholder="Jan Kowalski" />
<Textarea rows={5} placeholder="Twoja wiadomość…" />
<Input invalid />
```

Both fill width, sit on `--surface-elevated`, and accept all native input/textarea props. Set `invalid` for the danger border.
