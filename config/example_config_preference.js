// configure the test here
var TestConfig = {
  "TestName": "Joint ABX Test",
  "LoopByDefault": false,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "RandomizeTestOrder": true,
  "EnableOnlineSubmission": false,
  "MaxTestsPerRun": 1,
  "BeaqleServiceURL": "",
  "SupervisorContact": "",
  "AudioRoot": "",
  "Testsets": [
    //
    {
      "Name": "Similarity Test",
      "TestID": "SJF1_TEF1_F210SF_C41.AD.wav_0",
      "Files": {
        "A": "eval/gan/SJF1_TEF1/SJF1_TEF1_F210SF_C41.AD.wav",
        "X": "eval/natural/EF1/p230_390.wav",
        "B": "eval/vae/SJF1_TEF1/SJF1_TEF1_F210SF_C41.AD.wav",
      }
    },
    {
      "Name": "Similarity Test",
      "TestID": "SJF1_TEF1_F210SF_C41.AD.wav_1",
      "Files": {
        "A": "eval/vae/SJF1_TEF1/SJF1_TEF1_F210SF_C41.AD.wav",
        "X": "eval/natural/EF1/p230_390.wav",
        "B": "eval/gan/SJF1_TEF1/SJF1_TEF1_F210SF_C41.AD.wav",
      }
    },
    {
      "Name": "Similarity Test",
      "TestID": "SEF1_TJM1_p230_417.wav_0",
      "Files": {
        "A": "eval/gan/SEF1_TJM1/SEF1_TJM1_p230_417.wav",
        "X": "eval/natural/JM1/M211SF_C48.AD.wav",
        "B": "eval/vae/SEF1_TJM1/SEF1_TJM1_p230_417.wav",
      }
    },
    {
      "Name": "Similarity Test",
      "TestID": "SEF1_TJM1_p230_417.wav_1",
      "Files": {
        "A": "eval/vae/SEF1_TJM1/SEF1_TJM1_p230_417.wav",
        "X": "eval/natural/JM1/M211SF_C48.AD.wav",
        "B": "eval/gan/SEF1_TJM1/SEF1_TJM1_p230_417.wav",
      }
    },
    {
      "Name": "Similarity Test",
      "TestID": "SEM1_TJM1_p226_340.wav_0",
      "Files": {
        "A": "eval/gan/SEM1_TJM1/SEM1_TJM1_p226_340.wav",
        "X": "eval/natural/JM1/M211SF_C48.AD.wav",
        "B": "eval/vae/SEM1_TJM1/SEM1_TJM1_p226_340.wav",
      }
    },
    {
      "Name": "Similarity Test",
      "TestID": "SEM1_TJM1_p226_340.wav_1",
      "Files": {
        "A": "eval/vae/SEM1_TJM1/SEM1_TJM1_p226_340.wav",
        "X": "eval/natural/JM1/M211SF_C48.AD.wav",
        "B": "eval/gan/SEM1_TJM1/SEM1_TJM1_p226_340.wav",
      }
    },
    {
      "Name": "Similarity Test",
      "TestID": "SEM1_TJF1_p226_368.wav_0",
      "Files": {
        "A": "eval/gan/SEM1_TJF1/SEM1_TJF1_p226_368.wav",
        "X": "eval/natural/JF1/F210SF_C42.AD.wav",
        "B": "eval/vae/SEM1_TJF1/SEM1_TJF1_p226_368.wav",
      }
    },
    {
      "Name": "Similarity Test",
      "TestID": "SEM1_TJF1_p226_368.wav_1",
      "Files": {
        "A": "eval/vae/SEM1_TJF1/SEM1_TJF1_p226_368.wav",
        "X": "eval/natural/JF1/F210SF_C42.AD.wav",
        "B": "eval/gan/SEM1_TJF1/SEM1_TJF1_p226_368.wav",
      }
    },
    {
      "Name": "Similarity Test",
      "TestID": "SEF1_TJF1_p230_417.wav_0",
      "Files": {
        "A": "eval/gan/SEF1_TJF1/SEF1_TJF1_p230_417.wav",
        "X": "eval/natural/JF1/F210SF_C42.AD.wav",
        "B": "eval/vae/SEF1_TJF1/SEF1_TJF1_p230_417.wav",
      }
    },
    {
      "Name": "Similarity Test",
      "TestID": "SEF1_TJF1_p230_417.wav_1",
      "Files": {
        "A": "eval/vae/SEF1_TJF1/SEF1_TJF1_p230_417.wav",
        "X": "eval/natural/JF1/F210SF_C42.AD.wav",
        "B": "eval/gan/SEF1_TJF1/SEF1_TJF1_p230_417.wav",
      }
    },
    {
      "Name": "Similarity Test",
      "TestID": "SJM1_TEF1_M211SF_C50.AD.wav_0",
      "Files": {
        "A": "eval/gan/SJM1_TEF1/SJM1_TEF1_M211SF_C50.AD.wav",
        "X": "eval/natural/EF1/p230_390.wav",
        "B": "eval/vae/SJM1_TEF1/SJM1_TEF1_M211SF_C50.AD.wav",
      }
    },
    {
      "Name": "Similarity Test",
      "TestID": "SJM1_TEF1_M211SF_C50.AD.wav_1",
      "Files": {
        "A": "eval/vae/SJM1_TEF1/SJM1_TEF1_M211SF_C50.AD.wav",
        "X": "eval/natural/EF1/p230_390.wav",
        "B": "eval/gan/SJM1_TEF1/SJM1_TEF1_M211SF_C50.AD.wav",
      }
    },
    {
      "Name": "Similarity Test",
      "TestID": "SJM1_TEM1_M211SF_C50.AD.wav_0",
      "Files": {
        "A": "eval/gan/SJM1_TEM1/SJM1_TEM1_M211SF_C50.AD.wav",
        "X": "eval/natural/EM1/p226_355.wav",
        "B": "eval/vae/SJM1_TEM1/SJM1_TEM1_M211SF_C50.AD.wav",
      }
    },
    {
      "Name": "Similarity Test",
      "TestID": "SJM1_TEM1_M211SF_C50.AD.wav_1",
      "Files": {
        "A": "eval/vae/SJM1_TEM1/SJM1_TEM1_M211SF_C50.AD.wav",
        "X": "eval/natural/EM1/p226_355.wav",
        "B": "eval/gan/SJM1_TEM1/SJM1_TEM1_M211SF_C50.AD.wav",
      }
    },
    {
      "Name": "Similarity Test",
      "TestID": "SJF1_TEM1_F210SF_C50.AD.wav_0",
      "Files": {
        "A": "eval/gan/SJF1_TEM1/SJF1_TEM1_F210SF_C50.AD.wav",
        "X": "eval/natural/EM1/p226_355.wav",
        "B": "eval/vae/SJF1_TEM1/SJF1_TEM1_F210SF_C50.AD.wav",
      }
    },
    {
      "Name": "Similarity Test",
      "TestID": "SJF1_TEM1_F210SF_C50.AD.wav_1",
      "Files": {
        "A": "eval/vae/SJF1_TEM1/SJF1_TEM1_F210SF_C50.AD.wav",
        "X": "eval/natural/EM1/p226_355.wav",
        "B": "eval/gan/SJF1_TEM1/SJF1_TEM1_F210SF_C50.AD.wav",
      }
    }

  ]
}
