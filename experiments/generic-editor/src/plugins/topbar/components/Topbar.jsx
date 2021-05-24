/* eslint-disable react/no-array-index-key */
/* note for above disable of react/no-array-index-key,
 * using something lilke server.id then causes a React error
 * Warning: Each child in a list should have a unique "key" prop.
 */
// eslint-disable-next-line no-unused-vars
import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

// for screenreader aria-hidden
if (process.env.NODE_ENV !== 'test') {
  ReactModal.setAppElement('#root');
}

export default function Topbar(props) {
  const [clients, setClients] = useState([]);
  const [servers, setServers] = useState([]);
  const [specVersion, setSpecVersion] = useState('');

  const instantiateGeneratorClient = async () => {
    const { topbarActions } = props;

    const instantiate = await topbarActions.instantiateGeneratorClient();
    if (instantiate && instantiate.error) {
      // probably should not display error
      return;
    }
    if (instantiate) {
      // intended as temporary setState, prefer set a redux state instead
      // this.setState({
      //   clients: instantiate.clients,
      //   servers: instantiate.servers,
      //   specVersion: instantiate.specVersion,
      // });
      setClients(instantiate.clients);
      setServers(instantiate.servers);
      setSpecVersion(instantiate.specVersion);
    }
  };

  const shouldReInstantiateGeneratorClient = () => {
    // for live e2e test: oas3 will NOT include 'ada-server' as a list item
    const { topbarActions } = props;
    // const { specVersion } = this.state;
    const shouldReinstantiate = topbarActions.shouldReInstantiateGeneratorClient({ specVersion });
    // expect shouldReinstantiate to be boolean
    if (shouldReinstantiate) {
      instantiateGeneratorClient();
    }
  };

  const onDownloadGeneratedFileClick = async ({ type, name }) => {
    // ref legacy methods: downloadGeneratedFile -> handleResponse -> downloadFile -> reactFileDownload (lib)
    const { topbarActions } = props;
    const downloadData = await topbarActions.downloadGeneratedFile({
      type,
      name,
    });
    if (downloadData.error) {
      // display the error message
    }
  };

  useEffect(() => {
    // instantiateGeneratorClient();
    shouldReInstantiateGeneratorClient();
  });

  const { getComponent, topbarActions } = props;

  const LinkHome = getComponent('LinkHome');
  const DropdownMenu = getComponent('DropdownMenu');
  const DropdownItem = getComponent('DropdownItem');
  const FileMenuDropdown = getComponent('FileMenuDropdown');
  const EditMenuDropdown = getComponent('EditMenuDropdown');

  return (
    <div className="swagger-editor-standalone">
      <div className="topbar">
        <div className="topbar-wrapper">
          <LinkHome />
          <FileMenuDropdown getComponent={getComponent} topbarActions={topbarActions} />
          <EditMenuDropdown getComponent={getComponent} topbarActions={topbarActions} />
          <DropdownMenu displayName="Generate Server">
            {servers.map((server, i) => (
              <DropdownItem
                key={i}
                onClick={() => onDownloadGeneratedFileClick({ type: 'server', name: `${server}` })}
                name={server}
              />
            ))}
          </DropdownMenu>
          <DropdownMenu displayName="Generate Client">
            {clients.map((client, i) => (
              <DropdownItem
                key={i}
                onClick={() => onDownloadGeneratedFileClick({ type: 'client', name: `${client}` })}
                name={client}
              />
            ))}
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

// export class TopbarOri extends Component {
//   constructor(props, context) {
//     super(props, context);

//     this.state = {
//       clients: [],
//       servers: [],
//       specVersion: '',
//     };
//   }

//   componentDidMount() {
//     this.instantiateGeneratorClient();
//   }

//   componentDidUpdate() {
//     this.shouldReInstantiateGeneratorClient();
//   }

//   instantiateGeneratorClient = async () => {
//     const { topbarActions } = this.props;

//     const instantiate = await topbarActions.instantiateGeneratorClient();
//     if (instantiate && instantiate.error) {
//       // probably should not display error
//       return;
//     }
//     if (instantiate) {
//       // intended as temporary setState, prefer set a redux state instead
//       this.setState({
//         clients: instantiate.clients,
//         servers: instantiate.servers,
//         specVersion: instantiate.specVersion,
//       });
//     }
//   };

//   shouldReInstantiateGeneratorClient = () => {
//     // for live e2e test: oas3 will NOT include 'ada-server' as a list item
//     const { topbarActions } = this.props;
//     const { specVersion } = this.state;
//     const shouldReinstantiate = topbarActions.shouldReInstantiateGeneratorClient({ specVersion });
//     // expect shouldReinstantiate to be boolean
//     if (shouldReinstantiate) {
//       this.instantiateGeneratorClient();
//     }
//   };

//   onDownloadGeneratedFileClick = async ({ type, name }) => {
//     // ref legacy methods: downloadGeneratedFile -> handleResponse -> downloadFile -> reactFileDownload (lib)
//     const { topbarActions } = this.props;
//     const downloadData = await topbarActions.downloadGeneratedFile({
//       type,
//       name,
//     });
//     if (downloadData.error) {
//       // display the error message
//     }
//   };

//   render() {
//     const { servers, clients } = this.state;
//     const { getComponent, topbarActions } = this.props;

//     const LinkHome = getComponent('LinkHome');
//     const DropdownMenu = getComponent('DropdownMenu');
//     const DropdownItem = getComponent('DropdownItem');
//     const FileMenuDropdown = getComponent('FileMenuDropdown');
//     const EditMenuDropdown = getComponent('EditMenuDropdown');

//     return (
//       <div className="swagger-editor-standalone">
//         <div className="topbar">
//           <div className="topbar-wrapper">
//             <LinkHome />
//             <FileMenuDropdown getComponent={getComponent} topbarActions={topbarActions} />
//             <EditMenuDropdown getComponent={getComponent} topbarActions={topbarActions} />
//             <DropdownMenu displayName="Generate Server">
//               {servers.map((server, i) => (
//                 <DropdownItem
//                   key={i}
//                   onClick={() =>
//                     this.onDownloadGeneratedFileClick({ type: 'server', name: `${server}` })
//                   }
//                   name={server}
//                 />
//               ))}
//             </DropdownMenu>
//             <DropdownMenu displayName="Generate Client">
//               {clients.map((client, i) => (
//                 <DropdownItem
//                   key={i}
//                   onClick={() =>
//                     this.onDownloadGeneratedFileClick({ type: 'client', name: `${client}` })
//                   }
//                   name={client}
//                 />
//               ))}
//             </DropdownMenu>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

Topbar.propTypes = {
  topbarActions: PropTypes.oneOfType([PropTypes.object]).isRequired,
  getComponent: PropTypes.func.isRequired,
};
