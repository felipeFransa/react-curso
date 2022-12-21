export const render = () => {
  return (
    <form onSubmit={this.handleSubmit}>
      <FormGroup>
        <Label for="name">Nome</Label>
        <Input type="text" name="name" id="name" placeholder="Seu nome" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Seu email" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Senha</Label>
        <Input type="password" name="password" id="password" placeholder="Sua senha" />
      </FormGroup>
      <Button type="submit">Cadastrar</Button>
    </form>
  );
}
