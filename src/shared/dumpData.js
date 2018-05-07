export const currencyData = {
      deposit: true,
      title: 'Deposit',
      type: 'Deposits',
      showDpDwn: false,
      warningInfo: (val) => {
        return `Send only ${val} to this deposit address. Sending any other currency to this address may result in the loss of your deposit`
      },
      limitInfo: 'Limit 500 USD Lorem ipsum Lorem ipsum!',
      selectedCurrency: {
                          currencyType: 'cryptocurrency',
                          address: '',
                          amount: '',
                          checked: false,
                          title: 'ETH Ethereum',
                          balance: '1.210265',
                          icon: require('../assets/images/coins/ethereum.png'),
                          shortcut: 'ETH',
                          interactiveView: null
                        },
      currencies: [
                    {
                      currencyType: 'cryptocurrency',
                      address: null,
                      amount: null,
                      title: 'BTC Bitcoin',
                      balance: '1.2102',
                      icon: require('../assets/images/coins/Bitcoin.svg'),
                      checked: false,
                      shortcut: 'BTC'
                    },
                    {
                      currencyType: 'cryptocurrency',
                      address: null,
                      amount: null,
                      title: 'ETH Ethereum',
                      balance: '0.00',
                      icon: require('../assets/images/coins/ethereum.png'),
                      checked: false,
                      shortcut: 'ETH'
                    },
                    {
                      currencyType: 'fiat',
                      address: null,
                      amount: null,
                      title: 'AUD Australian Dollar',
                      balance: '300256.36',
                      icon: require('../assets/images/coins/Bitcoin.svg'),
                      checked: false,
                      shortcut: 'AUD'
                    },
                    {
                      currencyType: 'cryptocurrency',
                      address: null,
                      amount: null,
                      title: 'XRP Ripple',
                      balance: '23.236547',
                      icon: require('../assets/images/coins/Ripple-logo.png'),
                      checked: false,
                      shortcut: 'XRP'
                    },
                    {
                      currencyType: 'cryptocurrency',
                      address: null,
                      amount: null,
                      title: 'AION Aion',
                      balance: '0.00',
                      icon: require('../assets/images/coins/AION.jpg'),
                      checked: false,
                      shortcut: 'AION'
                    },
                    {
                      currencyType: 'cryptocurrency',
                      address: null,
                      amount: null,
                      title: 'BNB Binance',
                      balance: '300256.36',
                      icon: require('../assets/images/coins/binance-coin.svg'),
                      checked: false,
                      shortcut: 'BNB'
                    },
                    {
                      currencyType: 'cryptocurrency',
                      address: null,
                      amount: null,
                      title: 'OMG Omise Go',
                      balance: '1.210265',
                      icon: require('../assets/images/coins/omise-go.png'),
                      checked: false,
                      shortcut: 'OMG'
                    },
                    {
                      currencyType: 'cryptocurrency',
                      address: null,
                      amount: null,
                      title: 'QSP Quantstamp',
                      balance: '0.00',
                      icon: require('../assets/images/coins/quantstamp-logo.jpg'),
                      checked: false,
                      shortcut: 'QSP'
                    },
                    {
                      currencyType: 'cryptocurrency',
                      address: null,
                      amount: null,
                      title: 'DOGE Dogecoin',
                      balance: '300256.35',
                      icon: require('../assets/images/coins/doge.svg'),
                      checked: false,
                      shortcut: 'DOGE'
                    }
                  ]
}
