import styles from "./contactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ filteredContactsProp, handleDeleteProp }) => {
  return (
    <ul>
      {filteredContactsProp.map((contact) => (
        <li key={contact.id} className={styles.li}>
          {contact.name}: {contact.number}
          <button
            className={styles.button}
            type="button"
            onClick={() => handleDeleteProp(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  filteredContactsProp: PropTypes.array.isRequired,
  handleDeleteProp: PropTypes.func.isRequired,
};

// ContactList.propTypes = {
//   filteredContactsProp: PropTypes.shape.isRequired({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.number.isRequired,
//   }),
//   handleDeleteProp: PropTypes.func.isRequired,
// };
