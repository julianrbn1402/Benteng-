import React, { useState, useMemo } from 'react';
import InputField from './components/InputField';
import ResultField from './components/ResultField';
import BentengLogo from './components/BentengLogo';

const App: React.FC = () => {
  const [lebarDumping, setLebarDumping] = useState<string>('');
  const [tinggiJenjang, setTinggiJenjang] = useState<string>('');

  const calculations = useMemo(() => {
    const lebar = parseFloat(lebarDumping) || 0;
    const tinggi = parseFloat(tinggiJenjang) || 0;
    
    if (lebar <= 0 || tinggi <= 0) {
      return {
        volJelek: 0,
        volBagus: 0,
        ritJelek: 0,
        ritBagus: 0,
      };
    }

    const volJelek = (2 / 3) * lebar * tinggi * 7;
    const volBagus = (1 / 3) * lebar * tinggi * 7;
    const denominator = 41 * 0.8;
    const ritJelek = volJelek / denominator;
    const ritBagus = volBagus / denominator;

    return { volJelek, volBagus, ritJelek, ritBagus };
  }, [lebarDumping, tinggiJenjang]);

  const handleReset = () => {
    setLebarDumping('');
    setTinggiJenjang('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div 
        className="w-full max-w-2xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl shadow-cyan-500/10 p-6 md:p-10"
      >
        <header className="text-center mb-10">
          <BentengLogo className="w-full max-w-sm h-auto mx-auto text-cyan-400 mb-2 opacity-90" />
          <h1 className="text-5xl font-orbitron font-bold tracking-widest uppercase bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
            Benteng!
          </h1>
          <p className="text-cyan-400 mt-3 text-lg tracking-wider font-semibold drop-shadow-[0_0_4px_theme(colors.cyan.400)]">
            AUTONOMIA!
          </p>
        </header>

        <main className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 border-l-4 border-cyan-400 pl-3">Input Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                id="lebar-dumping"
                label="Lebar Dumping Point"
                value={lebarDumping}
                onChange={(e) => setLebarDumping(e.target.value)}
                unit="meter"
                placeholder="e.g., 10"
              />
              <InputField
                id="tinggi-jenjang"
                label="Tinggi Jenjang"
                value={tinggiJenjang}
                onChange={(e) => setTinggiJenjang(e.target.value)}
                unit="meter"
                placeholder="e.g., 5"
              />
            </div>
          </section>
          
          <div className="border-t border-slate-700/80 my-4"></div>
          
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 border-l-4 border-indigo-400 pl-3">Hasil Perhitungan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResultField
                label="Volume Material Jelek"
                value={calculations.volJelek.toFixed(2)}
                unit="m³"
              />
              <ResultField
                label="Volume Material Bagus"
                value={calculations.volBagus.toFixed(2)}
                unit="m³"
              />
              <ResultField
                label="Jumlah Rit Material Jelek"
                value={Math.ceil(calculations.ritJelek).toString()}
                unit="rit"
              />
              <ResultField
                label="Jumlah Rit Material Bagus"
                value={Math.ceil(calculations.ritBagus).toString()}
                unit="rit"
              />
            </div>
          </section>
          
          <div className="pt-6">
            <button 
              onClick={handleReset}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 shadow-lg shadow-indigo-500/20"
            >
              Reset
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;