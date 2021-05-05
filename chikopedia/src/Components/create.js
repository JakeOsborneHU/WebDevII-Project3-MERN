import React from 'react';
import Form from 'react-bootstrap/Form';

function Create() {
  return(
    <Form>
      <Form.Group>
        <Form.Label>Id</Form.Label>
        <Form.Control type="number" />
        <Form.Label>Name</Form.Label>
        <Form.Text />
        <Form.Label>Height</Form.Label>
        <Form.Text />
        <Form.Label>Weight</Form.Label>
        <Form.Text />
        <Form.Label>Type</Form.Label>
        <select>
          <option selected value="Normal">Normal</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Grass">Grass</option>
          <option value="Electric">Electric</option>
          <option value="Ice">Ice</option>
          <option value="Fighting">Fighting</option>
          <option value="Poison">Poison</option>
          <option value="Ground">Ground</option>
          <option value="Flying">Flying</option>
          <option value="Psychic">Psychic</option>
          <option value="Bug">Bug</option>
          <option value="Rock">Rock</option>
          <option value="Ghost">Ghost</option>
          <option value="Dark">Dark</option>
          <option value="Dragon">Dragon</option>
          <option value="Steel">Steel</option>
          <option value="Fairy">Fairy</option>
        </select>
        <Form.Label>Secondary Type</Form.Label>
        <select>
          <option selected value="None">None</option>
          <option value="Normal">Normal</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Grass">Grass</option>
          <option value="Electric">Electric</option>
          <option value="Ice">Ice</option>
          <option value="Fighting">Fighting</option>
          <option value="Poison">Poison</option>
          <option value="Ground">Ground</option>
          <option value="Flying">Flying</option>
          <option value="Psychic">Psychic</option>
          <option value="Bug">Bug</option>
          <option value="Rock">Rock</option>
          <option value="Ghost">Ghost</option>
          <option value="Dark">Dark</option>
          <option value="Dragon">Dragon</option>
          <option value="Steel">Steel</option>
          <option value="Fairy">Fairy</option>
        </select>
      </Form.Group>
    </Form>
  );
}

export default Create