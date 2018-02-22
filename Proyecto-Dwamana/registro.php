<h2>Registro de asistencia</h2>
<form id="formRegister">
	<fieldset>
		<input type="text" name="" id="name" pattern=".{3,}" placeholder="nombre">
		<input type="text" name="" id="surname" pattern=".{6,}" placeholder="apellidos">
		<input type="text" name="" id="dni" placeholder="dni">
		<input type="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" placeholder="yourMail@domain.es">
		<input type="text" id="location" placeholder="procedencia">
		<input type="submit" value="Registrar" id="submit" pattern="^\d{8}[a-zA-Z]$">
	</fieldset>
</form>