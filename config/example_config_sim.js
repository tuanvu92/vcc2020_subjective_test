// configure the Similarity Test here
var TestConfig = {
  "TestName": "Speaker Similarity Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 20,
  "RateMaxValue": 100,
  "RateDefaultValue":20,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 10,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "Similarity Test 1",
      "TestID": "P225_ss",
      "Files": {
            "Reference": "audio/select/p225_021.wav",
            "1": "audio/seen_seen/b_p226_p225_021.wav",
            "2": "audio/seen_seen/b_p245_p225_021.wav",
            "3": "audio/seen_seen/b_p246_p225_021.wav",
            "4": "audio/seen_seen/p_p226_p225_021.wav",
            "5": "audio/seen_seen/p_p245_p225_021.wav",
            "6": "audio/seen_seen/p_p246_p225_021.wav", 
            "7": "audio/select/p351_021.wav",            
        }
    },
    {
      "Name": "Similarity Test 2",
      "TestID": "P226_ss",
      "Files": {
            "Reference": "audio/select/p226_021.wav",
            "1": "audio/seen_seen/b_p225_p226_021.wav",
            "2": "audio/seen_seen/b_p245_p226_021.wav",
            "3": "audio/seen_seen/b_p246_p226_021.wav",
            "4": "audio/seen_seen/p_p225_p226_021.wav",
            "5": "audio/seen_seen/p_p245_p226_021.wav",
            "6": "audio/seen_seen/p_p246_p226_021.wav",
            "7": "audio/select/p245_021.wav",            
        }
    },

    {
      "Name": "Similarity Test 3",
      "TestID": "P247_su",
      "Files": {
            "Reference": "audio/select/p347_021.wav",
            "1": "audio/seen_unseen/p_p225_p347_021.wav",
            "2": "audio/seen_unseen/p_p226_p347_021.wav",
            "3": "audio/seen_unseen/p_p245_p347_021.wav",
            "4": "audio/seen_unseen/p_p246_p347_021.wav", 
            "5": "audio/select/p226_021.wav",            
        }
    }, 

    {
      "Name": "Similarity Test 4",
      "TestID": "P251_su",
      "Files": {
            "Reference": "audio/select/p351_021.wav",
            "1": "audio/seen_unseen/p_p225_p351_021.wav",
            "2": "audio/seen_unseen/p_p226_p351_021.wav",
            "3": "audio/seen_unseen/p_p245_p351_021.wav",
            "4": "audio/seen_unseen/p_p246_p351_021.wav", 
            "5": "audio/select/p347_021.wav",            
        }
    },

    {
      "Name": "Similarity Test 5",
      "TestID": "P225_us",
      "Files": {
            "Reference": "audio/select/p225_021.wav",
            "1": "audio/unseen_seen/p_p347_p225_021.wav",
            "2": "audio/unseen_seen/p_p351_p225_021.wav",
            "3": "audio/unseen_seen/p_p361_p225_021.wav",
            "4": "audio/unseen_seen/p_p362_p225_021.wav", 
            "5": "audio/unseen_seen/b_p347_p225_021.wav",
            "6": "audio/unseen_seen/b_p351_p225_021.wav",
            "7": "audio/unseen_seen/b_p361_p225_021.wav",
            "8": "audio/unseen_seen/b_p362_p225_021.wav", 
            "9": "audio/select/p351_021.wav",           
        }
    },

    {
      "Name": "Similarity Test 6",
      "TestID": "P226_us",
      "Files": {
            "Reference": "audio/select/p226_021.wav",
            "1": "audio/unseen_seen/p_p347_p226_021.wav",
            "2": "audio/unseen_seen/p_p351_p226_021.wav",
            "3": "audio/unseen_seen/p_p361_p226_021.wav",
            "4": "audio/unseen_seen/p_p362_p226_021.wav", 
            "5": "audio/unseen_seen/b_p347_p226_021.wav",
            "6": "audio/unseen_seen/b_p351_p226_021.wav",
            "7": "audio/unseen_seen/b_p361_p226_021.wav",
            "8": "audio/unseen_seen/b_p362_p226_021.wav",
            "9": "audio/select/p245_021.wav",           
        }
    },

    {
      "Name": "Similarity Test 7",
      "TestID": "P347_uu",
      "Files": {
            "Reference": "audio/select/p347_021.wav",
            "1": "audio/unseen_unseen/p_p351_p347_021.wav",
            "2": "audio/unseen_unseen/p_p361_p347_021.wav",
            "3": "audio/unseen_unseen/p_p362_p347_021.wav",
            "4": "audio/select/p226_021.wav",                 
        }
    },

    {
      "Name": "Similarity Test 8",
      "TestID": "P351_uu",
      "Files": {
            "Reference": "audio/select/p351_021.wav",
            "1": "audio/unseen_unseen/p_p347_p351_021.wav",
            "2": "audio/unseen_unseen/p_p361_p351_021.wav",
            "3": "audio/unseen_unseen/p_p362_p351_021.wav",  
            "4": "audio/select/p225_021.wav",                        
        }
    },
  ]
}
